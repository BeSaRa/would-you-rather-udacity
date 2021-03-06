import {FaPoll} from "react-icons/all";
import {connect} from "react-redux";
import {loginAction} from "../store/actions/authUser";
import {Redirect, useLocation} from "react-router-dom";
import {successMessage} from "../store/actions/message";

function Login({usersIds, users, authUser, dispatch}) {
    let select = null;
    const {state} = useLocation();
    const doLogin = (userId) => {
        // ignore dispatch login action if there is no users in userIds list
        if (!userId)
            return;
        // dispatch login action for the selected user
        dispatch(loginAction(userId));
        // display welcome message for the logged-in user
        dispatch(successMessage(`Welcome back!, ${users[userId].name}`))
    }

    if (authUser) {
        return <Redirect to={{pathname: state?.from ? state.from : '/'}}/>
    }

    return <div className='d-flex align-items-center justify-content-center'>
        <div className="card shadow-lg col-md-6 col-lg-4 col-sm-12 p-2">
            <div className='mb-3 d-flex align-items-center justify-content-center'>
                <div className='d-flex flex-column align-items-center'>
                    <FaPoll size={150}/>
                    <h4>Polling!</h4>
                    <small>Please Sign in to continue </small>
                </div>
            </div>
            <div className="mb-3">
                <select ref={(ele) => select = ele} className='form-select'>
                    {usersIds.map(id => <option value={id} key={id}>{users[id].name}</option>)}
                </select>
            </div>
            <button disabled={!usersIds.length} onClick={() => doLogin(select.value)}
                    className='btn btn-primary'>Login
            </button>
        </div>
    </div>
}

function mapStateToProps({users, authUser}) {
    return {
        usersIds: Object.keys(users),
        users,
        authUser
    }
}

export default connect(mapStateToProps)(Login);
