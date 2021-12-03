import {connect} from "react-redux";
import {logoutAction} from "../store/actions/authUser";

function UserDetails({user, dispatch}) {
    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutAction());
    }
    // if there is no logged-in user don't display anything
    if (!user)
        return null;

    return (
        <div>
            <ul className='navbar-nav d-flex align-items-center justify-content-end'>
                <li className="nav-item"><span className="nav-link">Hello, {user.name}</span></li>
                <li className="nav-item"><img alt="avatar" className={'logged-in-avatar'}
                                              src={"/assets/avatars/avatar-1.png"}/></li>
                <li className="separator"/>
                <li className="nav-item"><a className='nav-link' onClick={(e) => logout(e)} href="/#">logout</a></li>
            </ul>
        </div>
    )
}

function mapStateToProps({authUser, users}) {
    return {
        user: authUser ? users[authUser] : false
    }
}

export default connect(mapStateToProps)(UserDetails);
