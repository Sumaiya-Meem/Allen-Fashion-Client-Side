/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,handleReload} =useContext(AuthContext);
    const location =useLocation();
    // console.log(location)
    if(handleReload){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(user){
          return children;
    }
    
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;