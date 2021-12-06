import {useState} from "react";
import {handleAnswerQuestion} from "../store/actions/questions";

function VoteQuestion({question, authUser, dispatch}) {
    const [answer, setAnswer] = useState('optionOne');
    const isSelectedAnswer = (value) => {
        return answer === value
    }

    const submitAnswer = () => {
        dispatch(handleAnswerQuestion({
            answer,
            qid: question.id,
            authedUser: authUser
        }))
    }

    return <div className="question-text d-flex flex-column flex-grow-1">
        <h5>would you rather</h5>
        <div>
            <div className="form-check mb-3">
                <input className="form-check-input" onChange={() => setAnswer("optionOne")}
                       checked={isSelectedAnswer("optionOne")} value="optionOne"
                       type="radio" name="answer"
                       id="optionOne"/>
                <label className="form-check-label" htmlFor="optionOne">
                    {question.optionOne.text}
                </label>
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input" type="radio" onChange={() => setAnswer("optionTwo")}
                       checked={isSelectedAnswer("optionTwo")}
                       value="optionTwo" name="answer"
                       id="optionTwo"/>
                <label className="form-check-label" htmlFor="optionTwo">
                    {question.optionTwo.text}
                </label>
            </div>
        </div>
        <button onClick={() => submitAnswer()} className="btn btn-primary">view poll</button>
    </div>
}

export default VoteQuestion;
