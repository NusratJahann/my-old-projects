import React, { useEffect, useState } from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import img from "./../../Images/login_page/google-logo-9824.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase/firebase.init";
import Loading from "../Loading/Loading";


const Login = () => {
  const [currentUser, setCurrentUser] = useState({});
  

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(error?.message)

  useEffect(() => {
    setCurrentUser(user?.user);  
  }, [user?.user])

  

  if (loading == true) {
    return <Loading></Loading>
  }
  
  
  return (
    
    <div className=" flex flex-col  justify-center items-center  h-screen mt-16 ">
        

      {/* <span className="mb-20 mt-[-80px] font-medium text-2xl text-red-700  ">Welcome to the </span>  */}
      <span style={{height: "150px"}} className=" mt-[-250px]" >
        <TypeWriterEffect startDelay={1500} textStyle={{ fontFamily: 'Red Hat Display',color: '#dc2626',fontWeight: 400,fontSize: '2.5em', }}  typeSpeed={80}  multiText={["Welcome to the TIMER."]} hideCursorAfterText = {true} cursorColor ="#dc2626"  ></TypeWriterEffect>
      </span>
      


      <div className="flex flex-col  justify-center items-center mt-10 ">
        <button onClick={()=>signInWithGoogle()} className="hover:cursor-auto"><img src={img} alt="" srcset="" className="w-24 avatar shadow-lg rounded-full "  /></button>
        <button onClick={()=>signInWithGoogle()} className="btn mt-6 hover:shadow-xl btn-outline shadow-md  btn-error">Login by google</button>
        <p className=" text-sm pt-4 text-red-700 font-thin">{error?.message}</p>
      </div>
    </div>
  );
};

export default Login;


   