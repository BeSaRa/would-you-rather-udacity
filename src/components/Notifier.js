import {connect} from "react-redux";
import {useEffect} from "react";
import {dismissMessage} from "../store/actions/message";

function Notifier({message, dispatch}) {
    useEffect(() => {
        const timer = message ? setTimeout(() => dispatch(dismissMessage()), message.timer) : null;
        return () => timer ? clearInterval(timer) : null;
    })
    const dismiss = () => {
        dispatch(dismissMessage());
    }

    return message ? (<div className="d-flex align-items-center justify-content-center">
        <div className="alert alert-dismissible alert-success" role="alert">
            <span>{message.text}</span>
            <button onClick={dismiss} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
        </div>
    </div>) : null
}

function mapStateToProps(state) {
    return {message: state.message}
}

export default connect(mapStateToProps)(Notifier)
