import {combineReducers} from "redux";
import users from "./users";
import questions from "./questions";
import authUser from "./authUser";
import {message} from "./message";

export default combineReducers({
    users, questions, authUser, message
});
