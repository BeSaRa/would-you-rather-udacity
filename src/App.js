import './App.css';
import Navigation from "./components/Navigation";
import {useEffect} from "react";
import {handleLoadInitialData} from "./store/actions/shared";
import {connect} from "react-redux";
import {loginAction} from "./store/actions/authUser";
import Login from "./components/Login";
import Home from "./components/Home";
import {Route, Switch} from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import NewQuestion from "./components/NewQuestion";

function App({dispatch}) {
    useEffect(() => {
        // load the initial data for our store
        dispatch(handleLoadInitialData());
        dispatch(loginAction('sarahedo'));
    });
    return (<div id="app" className="d-flex flex-column flex-grow-1">
            <Navigation/>
            <div className="container shadow-sm bg-white flex-grow-1 pt-5">
                <Switch>
                    <ProtectedRoute exact={true} path={'/'}><Home/></ProtectedRoute>
                    <ProtectedRoute path={'/new'}><NewQuestion/></ProtectedRoute>
                    <Route path={'/login'} component={Login}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </div>);
}

export default connect()(App);
