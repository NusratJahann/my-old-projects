import { getAuth } from 'firebase/auth';
import './App.css';
import app from './firebase.init';
import useFirebase from './useFirebase';



function App() {
  

  const auth = getAuth(app)
 
  const { user, googleSignIn, googleSignUp, googleLogOut } = useFirebase({})

  const handleSignUp  = (event) => {
    console.log("Sign up")
    googleSignUp(auth)
  }
  
  const handleLogIn  = (event) => {

    console.log("Log in")
    googleSignUp(auth)
  }

  const handleLogOut  = (event) => {
    googleLogOut(auth)
  }

  console.log(user.displayName)
  return (
    <div className="App"> 
          
      
      <br />
      
      {
        user.email ?
        <div>
          <button onClick={handleLogOut} >Log out</button>
          <h1>{user?.displayName}</h1>   
          <p>{user.email}</p>
        </div>
        :
        <div>
          <button onClick={handleSignUp} >Sign up</button>
          <button onClick={handleLogIn} >Log in</button>  
          <p>No user here</p>
        </div>
        
      }
      
      
    </div>
  );
}

export default App;
