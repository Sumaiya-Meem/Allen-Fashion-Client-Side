import { Link } from "react-router-dom";

const ErrorPages = () => {
    return (
        <div>
            <div className="flex flex-col mt-32 justify-center items-center">
             <div className="max-w-[600px] shadow-md p-5 text-center rounded-lg">
                <h1 className="text-6xl font-extrabold mb-3">404</h1>
                <h4 className="text-2xl font-semibold mb-3 uppercase">Opps! Page not found</h4>
                <p className="text-xl text-[#0d0d0d] mb-4">Sorry,the page you are looking does not exist.</p>
                
                <Link to='/'>
                <button className="border-2 border-[#69a6ce]  text-[#347dad] rounded-lg p-2 font-semibold">Return Home</button>
                </Link>

             </div>
        </div>
        </div>
    );
};

export default ErrorPages;