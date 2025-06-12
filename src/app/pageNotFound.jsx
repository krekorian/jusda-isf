import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to={"/"}>
                <button>Go To Home Page</button>
            </Link>

        </div>
    )
}

export default PageNotFound;