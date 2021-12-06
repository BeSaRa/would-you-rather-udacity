import {FaPoll} from "react-icons/all";
import UserDetails from "./UserDetails";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";

function Navigation({authUser}) {
    return (<nav className="navbar shadow navbar-expand navbar-dark bg-dark flex-grow-0">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <FaPoll className={'logo'}/>
                <span> Polling! </span>
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className={'nav-item'}>
                    <NavLink exact={true} activeClassName={'active'} to={'/'} className={'nav-link'}>home</NavLink>
                </li>
                <li className={'nav-item'}>
                    <NavLink activeClassName={'active'} to={'/add'} className={'nav-link'}>New Question</NavLink>
                </li>
                <li className={'nav-item'}>
                    <NavLink activeClassName={'active'} to={'/leaderboard'} className={'nav-link'}>leaderboard</NavLink>
                </li>
            </ul>
            {authUser && <UserDetails/>}
        </div>
    </nav>)
}

function mapStateToProps(state) {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps)(Navigation);
