import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2>Page Not Found</h2>
            <Link to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;