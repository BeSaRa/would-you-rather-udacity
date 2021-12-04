import {_saveQuestion} from "../../API/API";

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

export const handleAddQuestion = (question) => (dispatch) => {
    _saveQuestion(question)
        .then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
        })
}
