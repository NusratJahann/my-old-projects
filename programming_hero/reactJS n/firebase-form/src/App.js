import React, { useState } from 'react';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app)

const App = () => {
  const [user,  setUser] = useState({})
  const provider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setUser(user);
    })
    .catch(error => {
      console.log("err", error)
    })
  }

  const handleSignOut = () => {
    signOut(auth).then(() => setUser({}))
    .catch(error => setUser({}))
  }

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google sign in</button>
      <h1>{user.displayName}</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default App;