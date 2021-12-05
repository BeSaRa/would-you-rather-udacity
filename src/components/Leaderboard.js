import {connect} from "react-redux";
import {User} from "./User";

function Leaderboard({users}) {
    console.log(users);
    return (<div className='d-flex flex-column align-items-center justify-content-center'>
        {users.map(user => <User key={user.id} user={user}/>)}
    </div>)
}

function getCup(index) {
    const cups = {
        0: 'cup-xgold',
        1: 'cup-xsilver',
        2: 'cup-xbronze'
    }
    return cups[index] || null;
}

function mapStateToProps(state) {
    const {users} = state;
    return {
        users: Object.keys(users).map(userId => {
            const answersCount = Object.keys(users[userId].answers).length
            const questionsCount = users[userId].questions.length
            return {
                ...users[userId], answersCount, questionsCount, score: answersCount + questionsCount
            }
        }).sort((a, b) => b.score - a.score)
            // give only first 3 users cups
            .map((user, index) => ({...user, hasCup: (index <= 2), cup: getCup(index)}))
    }
}


export default connect(mapStateToProps)(Leaderboard);
