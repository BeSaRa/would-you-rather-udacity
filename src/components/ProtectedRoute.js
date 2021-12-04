import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

function ProtectedRoute({children, authUser, ...rest}) {
    return <Route {...rest} render={() => {
        return authUser ? (children) : <Redirect to={'/login'}/>
    }}/>
}

function mapStateToProps({authUser}) {
    return {authUser}
}

export default connect(mapStateToProps)(ProtectedRoute);
