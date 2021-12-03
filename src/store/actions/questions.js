export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestionsAction(questions){
    return {
        type: RECEIVE_QUESTIONS,
        payload: questions
    }
}


