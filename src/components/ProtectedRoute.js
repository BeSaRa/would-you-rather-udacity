import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

function ProtectedRoute({children, authUser, ...rest}) {
    return <Route {...rest} render={({location}) => {
        return authUser ? (children) : <Redirect to={{
            pathname: '/login',
            state: {from: location.pathname}
        }}/>
    }}/>
}

function mapStateToProps({authUser}) {
    return {authUser}
}

export default connect(mapStateToProps)(ProtectedRoute);
