import {connect} from "react-redux";
import QuestionsList from "./QuestionsList";
import {useState} from "react";

function Home({answered, unAnswered}) {
    // tabs (Answered , unAnswered)
    const tabs = {
        answered: {
            title: 'Answered Questions',
            items: answered,
            count: answered.length
        },
        unAnswered: {
            title: 'Unanswered Questions',
            items: unAnswered,
            count: unAnswered.length
        }
    }
    const [selected, setSelected] = useState('unAnswered');

    const isSelected = (name) => {
        return name === selected;
    }

    const updateSelectedTab = (event, name) => {
        event.preventDefault();
        setSelected(name);
    }

    return (<div className="d-flex align-items-center justify-content-center">
        <div className="card shadow-lg col-sm-12 col-md-6">
            <ul className="nav nav-pills nav-fill">
                {Object.keys(tabs).map((item) => (<li key={item} className="nav-item">
                    <a href="/#" className={`nav-link ${isSelected(item) ? `active` : ``}`} aria-current="page"
                       onClick={(event) => updateSelectedTab(event, item)}>{tabs[item].title} -
                        ({tabs[item].count})</a>
                </li>))}

            </ul>
            <div className="row">
                <QuestionsList questions={tabs[selected].items}/>
            </div>
        </div>
    </div>);
}

function mapStateToProps(state) {
    const {authUser, users, questions} = state;
    const user = users[authUser];
    const answered = user ? Object.keys(user.answers) : [];
    // filter the answered
    const unAnswered = Object.keys(questions).filter((id) => !answered.includes(id))
    return {
        answered,
        unAnswered
    }
}

export default connect(mapStateToProps)(Home);
