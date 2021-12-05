import {useState} from "react";
import {connect} from "react-redux";
import {handleAddQuestion} from "../store/actions/questions";
import {useHistory} from "react-router-dom";

function NewQuestion({authUser, dispatch}) {
    const [optionOneText, setOptionOne] = useState("");
    const [optionTwoText, setOptionTwo] = useState("");
    const history = useHistory();
    const submitQuestion = () => {
        dispatch(handleAddQuestion({
            optionOneText, optionTwoText, author: authUser
        }, () => {
            // redirect back to the home page
            history.push('/');
        }))
    }

    return <div className="d-flex align-items-center justify-content-center">
        <div className="card shadow-lg col-sm-12 col-md-6">
            <div className="card-header">
                <h4 className="text-center">Create New Question</h4>
            </div>
            <div className="card-body">
                <p>Complete the Question</p>
                <h3>Would You Rather...</h3>
                <input value={optionOneText} onChange={(e) => setOptionOne(e.target.value)}
                       placeholder="Enter Option One Text here" className="form-control mb-4"/>
                <div className="position-relative mb-4">
                    <hr/>
                    <h3 className="text-center bg-white position-absolute start-50  top-50 translate-middle">OR</h3>
                </div>
                <input value={optionTwoText} onChange={(e) => setOptionTwo(e.target.value)}
                       placeholder="Enter Option Two Text here" className="form-control mb-4"/>
                <div className="d-grid">
                    <button onClick={submitQuestion} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
}

function mapStateToProps({authUser}) {
    return {authUser}
}

export default connect(mapStateToProps)(NewQuestion);
