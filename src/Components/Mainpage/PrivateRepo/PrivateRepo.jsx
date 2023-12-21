
import useAuth from "../Hooks.jsx/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRepo = ({children}) => {
    const  loc = useLocation();
  
       
        const {user, loading} = useAuth();
    
        if(loading){
            <h1 className="text-2xl">Loading...</h1>
        }
        if(user){
            return children
        }else{
            return <Navigate state={loc.pathname} to="/login"></Navigate>
        }
};

export default PrivateRepo;