import {_getQuestions, _getUsers} from "../../API/API";
import {receiveQuestionsAction} from "./questions";
import {receiveUsersAction} from "./users";
import {hideLoading, showLoading} from "react-redux-loading-bar";


export function handleLoadInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([_getQuestions(), _getUsers()])
            .then(([questions, users]) => {
                dispatch(receiveUsersAction(users));
                dispatch(receiveQuestionsAction(questions));
            }).finally(() => dispatch(hideLoading()))
    };
}



