import {  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import app from '../../firebase.init';

const useFirebase = () => {

    const [userName, setUserName] = useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUserName(user.displayName)
            } else {
              
            }
          });
    },[auth])


    //sign out
    function googleSignOut () {
        signOut(auth).then(() => {
            swal({
                icon:'success',
                title:'Logout',
                text:'Please, reload the page......!!!'
            })
          }).catch((error) => {
           console.log(error)
          });
    }





    const provider = new GoogleAuthProvider()
    // const [user, setUser] = useState('')
    

    //google sign in
    function googleSignIn () {
        signInWithPopup(auth,provider)
        .then(result => {
            // setUser(result.user)
        }).catch((error) => console.error(error))
    }


    



    return { googleSignIn, userName, googleSignOut }

};

export default useFirebase;