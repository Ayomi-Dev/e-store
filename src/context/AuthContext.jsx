import React, { createContext, useContext } from 'react';
// import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
//creating the authcontext function 
export const AuthContext = createContext();
 
//creating authentication hook to initialize the authcontext
export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const signUp = (auth, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // const login = ( email, password) => {
    //     return signInWithEmailAndPassword(auth, email, password)
    // }



    const value = { signUp }
  return (
    <AuthContext.Provider value={value} >
        { children }
    </AuthContext.Provider>
    
  )
}

export default AuthProvider;