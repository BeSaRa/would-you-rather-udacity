import {createStore} from "redux";
import appReducer from './reducers';
import middleware from "./middleware";
import {composeWithDevTools} from "redux-devtools-extension";

export default createStore(appReducer, composeWithDevTools(middleware));
