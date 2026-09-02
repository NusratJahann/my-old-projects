import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';
// import useAuth from '.';
import './Register.css'

const Register = () => {

    const history = useHistory()
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
  
    const { GoogleLogin, handleCreateUser,handleUpdate,isLogin ,handleSignInUser} =useFirebase()
  
    const handleRegister = e => {
      e.preventDefault()
      if(isLogin){
        handleSignInUser(email,password)
      }
      else{
        handleCreateUser(email,password)
      }
      handleCreateUser(name, email, password)
    }

    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleName = e => setName(e.target.value)



    return (
       
        <div className=' mx-auto  p-5 m-5 background-design'>
        <h2 className='text-2xl font-bold'>Please Register</h2>
        <form onSubmit={handleRegister} className='text-left my-5'>
        <div>
            <label htmlFor='name' className='emails'>
              Name:
            </label>
            <br />
           {! isLogin && 
            <input
            type='name'
            onBlur={handleUpdate}
            name='name'
            id='name'
            onChange={handleName}
            required
            className=' outline-none px-3 py-2 '
          />}
         
          </div>


          <div>
            <label htmlFor='email' className='emails'>
              Email:
            </label>
            <br />
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleEmail}
              required
              className=' outline-none px-3 py-2 '
            />
          </div>
          <div className='mt-2'>
            <label htmlFor='password' className='emails'>
              Password:
            </label>
            <br />
            <input
              type='password'
              name='password'
              id='password'
              onChange={handlePassword}
              required
              className='text-md outline-none px-3 py-2 '
            />
          </div>
          <button
            type='submit'
            className='done  mt-3 w-full'
          >
            Register
          </button>
        </form>
        <br />
        <p>
          New User?{' '}
          <button
            className='texts'
            onClick={() => history.push('/log')}
          >
            Login
          </button>{' '}
        </p>
       <br/>
    
       
    
       
      </div>

    );
};

export default Register;