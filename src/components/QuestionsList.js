import Question from "./Question";

function QuestionsList({questions}) {
    return (questions.length ? <div className="col-12">
        <ul className="p-3 m-0">
            {questions.map(id => <Question key={id} id={id}/>)}
        </ul>
    </div> : <h5 className="text-center py-5">No Questions to display!</h5>)

}

export default QuestionsList;
