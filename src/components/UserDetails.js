import {connect} from "react-redux";
import {logoutAction} from "../store/actions/authUser";

function UserDetails({dispatch}) {
    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutAction());
    }
    return (
        <div>
            <ul className='navbar-nav d-flex align-items-center justify-content-end'>
                <li className="nav-item"><span className="nav-link">Hello, Ahmed Mostafa</span></li>
                <li className="nav-item"><img alt="avatar" className={'logged-in-avatar'}
                                              src={"/assets/avatars/avatar-1.png"}/></li>
                <li className="separator"/>
                <li className="nav-item"><a className='nav-link' onClick={(e) => logout(e)} href="/#">logout</a></li>
            </ul>
        </div>
    )
}

export default connect()(UserDetails);
