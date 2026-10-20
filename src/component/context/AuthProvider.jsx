import React, { useEffect, useState } from "react";

import {  GoogleAuthProvider, onAuthStateChanged,  signInWithPopup, signOut, } from 'firebase/auth';

import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  

  
 

  

  

  const createUserWithGoogle=()=>{
    setLoading(true)
        const Provider=new GoogleAuthProvider
        return signInWithPopup(auth,Provider);
    }

   

    

    

    const handlesignOut=()=>{
      return signOut(auth)
    }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged (auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUserWithGoogle,
    handlesignOut,
    
    
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;