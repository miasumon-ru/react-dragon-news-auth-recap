import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";


    // creating a context

    export const AuthContext = new createContext()

const AuthProvider = ({children}) => {

    // state

    const [user, setUser] = useState()

    // creating a user 
  

    const createUser = (email, password) => {
        return   createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut

    const logOut = () => {
        return signOut(auth)
    }

    // onAuthStateChange , an observer of a current user

    useEffect(()=> {

        const unSubscribe = onAuthStateChanged(auth, currentUser =>{

            setUser(currentUser)

        })

        return ()=> {
            unSubscribe()
        }
        
    },[])

    const authInfo = {createUser , user, logOut, signIn }

    return (
        <AuthContext.Provider value={authInfo} >

            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;