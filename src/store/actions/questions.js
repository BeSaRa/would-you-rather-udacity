import {_saveQuestion} from "../../API/API";
import {successMessage} from "./message";

export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestionsAction(questions) {
    return {
        type: RECEIVE_QUESTIONS, payload: questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION, payload: question
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
