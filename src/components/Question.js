import {connect} from "react-redux";

function Question({question, author}) {
    // if the user has no avatar place the default unknown avatar
    // author.avatarURL = author.avatarURL ? author.avatarURL : '/assets/avatars/unknown.png';

    return <li className={'card shadow-sm m-2'}>
        <div className="card-header"><h5>{author.name} Asks:</h5></div>
        <div className="card-body">
            <div className="d-flex">
                <div className="avatar-image px-3 flex-grow-0">
                    <img alt={author.name} src={author.avatarURL}/>
                </div>
                <div className="question-text d-flex flex-column flex-grow-1">
                    <h5>would you rather</h5>
                    <p>{question.optionOne.text}</p>
                    <p>{question.optionTwo.text}</p>
                    <button className="btn btn-primary">view poll</button>
                </div>
            </div>
        </div>
    </li>
}

function mapStateToProps(state, {id}) {
    const question = state.questions[id];
    console.log({question});
    const author = state.users[question.author];
    console.log('author', author);
    return {
        question,
        author
    }
}

export default connect(mapStateToProps)(Question);
