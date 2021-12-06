import ProgressBar from "./ProgressBar";

function ResultQuestion({question, authUser}) {
    const options = ['optionOne', 'optionTwo'];
    const totalVotes = options.reduce((total, option) => total + question[option].votes.length, 0);

    const isMyVoteHere = (option) => {
        return question[option].votes.includes(authUser);
    }

    const getPercent = (option) => {
        return parseFloat((question[option].votes.length * 100 / totalVotes).toFixed(1));
    }

    return <div className="question-text d-flex flex-column flex-grow-1">
        <h5>Result:</h5>
        <div>
            {options.map((option) => <div key={option}
                                          className={`border rounded-3 border-2 p-2 mb-4 ${isMyVoteHere(option) ? 'position-relative border-primary' : ''}`}>
                {isMyVoteHere(option) && <span
                    className={'my-vote position-absolute top-0 start-100 translate-middle p-2 bg-info border text-wrap text-center badge border-light rounded-circle'}>Your Vote</span>}
                <h6>would you rather {question[option].text}</h6>
                <ProgressBar percent={getPercent(option)}/>
                <p className="text-center">{question[option].votes.length} out of {totalVotes}</p>
            </div>)}
        </div>
    </div>
}

export default ResultQuestion;
