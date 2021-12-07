import {useLocation} from "react-router-dom";

function PageNotFound() {
    const {state} = useLocation();
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <img alt="Page not found" src="/404.gif"/>
            <h1>{state ? state : 'Page Not Found'}</h1>
        </div>
    )
}

export default PageNotFound
