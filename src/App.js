import './App.css';
import Navigation from "./components/Navigation";
import {useEffect} from "react";
import {handleLoadInitialData} from "./store/actions/shared";
import {connect} from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";
import {Route, Switch} from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import NewQuestion from "./components/NewQuestion";
import Notifier from "./components/Notifier";
import Leaderboard from "./components/Leaderboard";
import QuestionDetails from "./components/QuestionDetails";
import LoadingBar from "react-redux-loading-bar";

function App({dispatch}) {
    useEffect(() => {
        // load the initial data for our store
        dispatch(handleLoadInitialData());
    });
    return (<div id="app" className="d-flex flex-column flex-grow-1">
        <Navigation/>
        <LoadingBar/>
        <div className="container shadow-sm bg-white flex-grow-1 pt-5">
            <Notifier/>
            <Switch>
                <ProtectedRoute exact={true} path={'/'}><Home/></ProtectedRoute>
                <ProtectedRoute path={'/add'}><NewQuestion/></ProtectedRoute>
                <ProtectedRoute path={'/leaderboard'}><Leaderboard/></ProtectedRoute>
                <ProtectedRoute path={'/questions/:question_id'}><QuestionDetails/></ProtectedRoute>
                <Route path={'/login'} component={Login}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </div>);
}

export default connect()(App);
