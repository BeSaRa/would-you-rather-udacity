import {ADD_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {...action.payload}
        case ADD_QUESTION:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
}
