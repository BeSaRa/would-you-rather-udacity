import {ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {...action.payload}
        case ADD_QUESTION:
            return {...state, [action.payload.id]: action.payload}
        case ANSWER_QUESTION:
            const {qid, answer, authedUser} = action.payload;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state;
    }
}
