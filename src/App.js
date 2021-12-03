import './App.css';
import Navigation from "./components/Navigation";
import {useEffect} from "react";
import {handleLoadInitialData} from "./store/actions/shared";
import {connect} from "react-redux";
import {loginAction} from "./store/actions/authUser";

function App({dispatch}) {
    useEffect(() => {
        // load the initial data for our store
        dispatch(handleLoadInitialData());
        dispatch(loginAction('Ahmed Mostafa'));
    });
    return (
        <div id="app" className="d-flex flex-column flex-grow-1">
            <Navigation/>
            <div className="container p-3 shadow-sm bg-white flex-grow-1">
                <button className={'btn btn-primary'}>welcome</button>
            </div>
        </div>
    );
}

export default connect()(App);
