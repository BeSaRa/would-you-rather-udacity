import {_saveQuestion, _saveQuestionAnswer} from "../../API/API";
import {successMessage} from "./message";
import {userAnswerQuestion} from "./users";

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
    _saveQuestion(question)
        .then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(successMessage("Your Question added successfully !"))
            cb && cb();
        })
}

export const handleAnswerQuestion = ({authedUser, qid, answer}) => (dispatch) => {
    _saveQuestionAnswer({authedUser, qid, answer})
        .then(() => {
            dispatch(answerQuestion({authedUser, qid, answer}))
            dispatch(userAnswerQuestion({authedUser, qid, answer}))
            dispatch(successMessage(" Your Answer saved successfully !"))
        })
}

