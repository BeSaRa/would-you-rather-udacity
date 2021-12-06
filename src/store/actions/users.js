export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';

export function receiveUsersAction(users) {
    return {
        type: RECEIVE_USERS,
        payload: users
    }
}

export function userAnswerQuestion({authedUser, qid, answer}) {
    return {
        type: USER_ANSWER_QUESTION,
        payload: {authedUser, qid, answer}
    }
}
