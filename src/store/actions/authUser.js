export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export function loginAction(username) {
    return {
        type: USER_LOGIN,
        payload: username
    }
}

export function logoutAction() {
    return {
        type: USER_LOGOUT
    }
}
