import {_saveQuestion, _saveQuestionAnswer} from "../../API/API";
import {successMessage} from "./message";
import {userAnswerQuestion} from "./users";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestionsAction(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        payload: questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        payload: question
    }
}


function answerQuestion({authedUser, qid, answer}) {
    return {
        type: ANSWER_QUESTION,
        payload: {authedUser, qid, answer}
    }
}

export const handleAddQuestion = (question, cb) => (dispatch) => {
    dispatch(showLoading())
    _saveQuestion(question)
        .then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(successMessage("Your Question added successfully !"))
            cb && cb();
        })
        .finally(() => dispatch(hideLoading()))
}

export const handleAnswerQuestion = ({authedUser, qid, answer}) => (dispatch) => {
    dispatch(showLoading())
    _saveQuestionAnswer({authedUser, qid, answer})
        .then(() => {
            dispatch(answerQuestion({authedUser, qid, answer}))
            dispatch(userAnswerQuestion({authedUser, qid, answer}))
            dispatch(successMessage(" Your Answer saved successfully !"))
        })
        .finally(() => dispatch(hideLoading()))
}

