import { Link } from "react-router-dom";



const ErrorElement = () => {
    return (
        <div>

            <p>Oopss !! </p>
            <p> Not Found the Page </p>

            <Link to={'/'} > <button className="btn btn-primary"> Go Back</button></Link>
            
        </div>
    );
};

export default ErrorElement;