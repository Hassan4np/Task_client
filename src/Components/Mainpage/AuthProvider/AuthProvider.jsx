import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../Router/firebase.config";


const provider = new GoogleAuthProvider();
const auth = getAuth(app);

//constext ------>
export const AuthContext = createContext(null);

//mainProjcet---------->
const AuthProvider = ({children}) => {
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(true)

    //Usersignup----------->
    const UserSignup = (email, password) => {
        // setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //UserLOgin----------->
    const UserLogin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const UserGoogleLogin = () => {
        return signInWithPopup(auth, provider);
    }
    // Auth state change------------>
    useEffect(() => {
        onAuthStateChanged(auth, (current) => {
      
            setuser(current)
            setloading(false)
        })
    }, [])
    //UserLogout------->
    const UserLogout = () => {
        setloading(true)
        return signOut(auth);
    }

    const Authinfo = {
        UserLogin,
        UserLogout,
        UserSignup,
        user,
        loading,
        UserGoogleLogin,
        name:'hasan'
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;