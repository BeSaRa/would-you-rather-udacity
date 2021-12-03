import {_getQuestions, _getUsers} from "../../API/API";
import {receiveQuestionsAction} from "./questions";
import {receiveUsersAction} from "./users";


export function handleLoadInitialData() {
    return (dispatch) => Promise.all([_getQuestions(), _getUsers()])
        .then(([questions, users]) => {
            dispatch(receiveQuestionsAction(questions));
            dispatch(receiveUsersAction(users));
        });
}



