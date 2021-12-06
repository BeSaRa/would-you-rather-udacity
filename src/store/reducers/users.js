import {RECEIVE_USERS, USER_ANSWER_QUESTION} from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {...action.payload}
        case USER_ANSWER_QUESTION:
            const {authedUser, qid, answer} = action.payload;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state;
    }
}
