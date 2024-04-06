import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";


    // creating a context

    export const AuthContext = new createContext()

const AuthProvider = ({children}) => {

    // state

    const [user, setUser] = useState(null)

    const [news, setNews] = useState([])

    const [loading , setLoading] = useState(true)

    // creating a user 
  

    const createUser = (email, password) => {
        setLoading(true)
        return   createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // onAuthStateChange , an observer of a current user

    useEffect(()=> {

        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)

        })

        return ()=> {
            unSubscribe()
        }
        
    },[])

    // news data 

    useEffect(()=> {
        
       fetch('/news.json')
        .then(result => result.json())
        .then(data => setNews(data))

    }, [])

    // AuthInfo which is passed  and any children can access it by using useContext

    const authInfo = {createUser , user, logOut, signIn, news, loading }

    return (
        <AuthContext.Provider value={authInfo} >

            {children}
            
        </AuthContext.Provider >
    );
};

export default AuthProvider;