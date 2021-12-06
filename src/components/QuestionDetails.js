import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import Avatar from "./Avatar";
import VoteQuestion from "./VoteQuestion";
import ResultQuestion from "./ResultQuestion";

function QuestionDetails({question, author, authUser, dispatch, alreadyAnswered}) {
    // redirect to error page if question not exists
    if (!question) {
        return <Redirect to={'/404'}/>
    }

    console.log({alreadyAnswered});

    return <div className="row align-items-center justify-content-center">
        <div className="col-md-8 col-sm-12 col-lg-6">
            <div className={'card shadow-sm m-2'}>
                <div className="card-header"><h5>Asked by: {author.name}</h5></div>
                <div className="card-body">
                    <div className="d-flex">
                        <Avatar user={author}/>
                        {!alreadyAnswered &&
                            <VoteQuestion dispatch={dispatch} authUser={authUser} question={question}/>}
                        {alreadyAnswered &&
                            <ResultQuestion authUser={authUser} question={question}/>}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

function mapStateToProps({questions, users, authUser}, {match: {params: {question_id: id}}}) {
    const question = questions[id];
    return {
        question,
        authUser,
        author: question ? users[question.author] : {},
        alreadyAnswered: question ? [].concat(question.optionOne.votes, question.optionTwo.votes).includes(authUser) : false
    }
}

export default withRouter(connect(mapStateToProps)(QuestionDetails));
