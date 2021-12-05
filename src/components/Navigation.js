import {FaPoll} from "react-icons/all";
import UserDetails from "./UserDetails";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function Navigation({authUser}) {
    return (<nav className="navbar shadow navbar-expand navbar-dark bg-dark flex-grow-0">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <FaPoll className={'logo'}/>
                <span> Polling! </span>
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className={'nav-item'}>
                    <Link to={'/'} className={'active nav-link'}>home</Link>
                </li>
                <li className={'nav-item'}>
                    <Link to={'/add'} className={'nav-link'}>New Question</Link>
                </li>
                <li className={'nav-item'}>
                    <Link to={'/leaderboard'} className={'nav-link'}>leaderboard</Link>
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
