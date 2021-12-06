import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import Avatar from "./Avatar";

function Question({question, author}) {
    const history = useHistory();

    const gotoQuestionDetails = (questionId) => {
        history.push('questions/' + questionId);
    }

    return <li className={'card shadow-sm m-2'}>
        <div className="card-header"><h5>{author.name} Asks:</h5></div>
        <div className="card-body">
            <div className="d-flex">
                <Avatar user={author}/>
                <div className="question-text d-flex flex-column flex-grow-1">
                    <h5>would you rather</h5>
                    <p>{question.optionOne.text}</p>
                    <p>{question.optionTwo.text}</p>
                    <button onClick={() => gotoQuestionDetails(question.id)} className="btn btn-primary">view poll
                    </button>
                </div>
            </div>
        </div>
    </li>
}

function mapStateToProps(state, {id}) {
    const question = state.questions[id];
    const author = state.users[question.author];
    return {
        question,
        author
    }
}

export default connect(mapStateToProps)(Question);
