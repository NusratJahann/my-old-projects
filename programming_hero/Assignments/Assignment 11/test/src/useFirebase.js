
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';


const useFirebase = () => {
    let auth = 0
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState({})

    const googleSignIn = auth => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            setUser(user)
        }).catch((error) => {
            console.error(error)
        });
    }

    const googleSignUp = auth => {
        googleSignIn(auth)
    }
    const googleLogOut = auth => {
        signOut(auth)
        .then(()=>{
            setUser({})
        }).catch(error => {
            console.error(error)
        })
        console.log(auth)
    }
    
    
    return { user, googleSignIn, googleSignUp, googleLogOut }
};

export default useFirebase;