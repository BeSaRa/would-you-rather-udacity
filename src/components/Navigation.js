import {FaPoll} from "react-icons/all";
import UserDetails from "./UserDetails";

export default function Navigation() {
    return (<nav className="navbar shadow navbar-expand navbar-dark bg-dark flex-grow-0">
        <div className="container">
            <a href="/#" className="navbar-brand">
                <FaPoll className={'logo'}/>
                <span> Polling! </span>
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className={'nav-item'}>
                    <a href={'/#'} className={'active nav-link'}>home</a>
                </li>
                <li className={'nav-item'}>
                    <a href={'/#'} className={'nav-link'}>New Question</a>
                </li>
                <li className={'nav-item'}>
                    <a href={'/#'} className={'nav-link'}>leaderboard</a>
                </li>
            </ul>
            <UserDetails/>
        </div>
    </nav>)
}
