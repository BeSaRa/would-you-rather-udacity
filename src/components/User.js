import {GiTrophyCup} from "react-icons/all";

export function User({user}) {
    return (<div className="card shadow-lg col-md-8 col-lg-6 col-sm-12 mb-3">
        {user.hasCup && (<div className="top-left-triangle position-absolute top-0 start-0">
            <GiTrophyCup className={`position-absolute cup-position ${user.cup}`} size={25}/>
        </div>)}
        <div className="d-flex flex-row p-2">
            <div className="avatar-image position-relative">
                <img src={user.avatarURL} alt={user.name}/>
            </div>
            <div className="questions-answers d-flex flex-column flex-grow-1 p-2 m-3">
                <h4>{user.name}</h4>
                <div className="d-flex">
                    <p className="flex-grow-1 m-0">Answered Questions</p>
                    <span className="fw-bold">{user.answersCount}</span>
                </div>
                <hr className="my-1"/>
                <div className="d-flex">
                    <p className="flex-grow-1 m-0">Created Questions</p>
                    <span className="fw-bold">{user.questionsCount}</span>
                </div>
            </div>
            <div className="score">
                <div className="card">
                    <div className="card-header"><h5>Score</h5></div>
                    <div className="card-body text-center"><h2>{user.score}</h2></div>
                </div>
            </div>
        </div>
    </div>)
}
