import {  useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import {Navigate, useLocation} from 'react-router-dom'



const PrivateRoute = ({children}) => {

    const {pathname} = useLocation()

    console.log(pathname)


    const {user, loading} = useContext(AuthContext)
     
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }


    if(user){
        return children
    }
    return <Navigate state={pathname} to='/login' > </Navigate>
};

export default PrivateRoute;