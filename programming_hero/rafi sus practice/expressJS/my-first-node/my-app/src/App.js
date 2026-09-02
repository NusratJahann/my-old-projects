import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [users,setUsers]=useState([]);

  useEffect(() => {

  
  fetch('http://localhost:5000/mew')
  .then(response => response.json())
  .then(data => setUsers(data))

  }, [])
  
 const handleAddUser = event => {
   event.preventDefault()
   const name=event.target.name.value;
   const mail=event.target.email.value;

   console.log(name, mail)
    //post data
    fetch("",{
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => console.log(data))
  })
   
 }
  return (
    <div className="App">
      

          <form onSubmit={handleAddUser}>
            <input type="text" name="name" placeholder='Name' />
            
            <input type="mail" name='email' placeholder='Email' />
            <input type="submit" value="Add User" />
          </form>

          <h1>This is my data {users.length}</h1>
          {
            users.map(user=>{
              return (<div>
                <p>Email: {user.mail}</p>
                <p>{user.name}</p>
              </div>)
            })
          }
          
      
    </div>
  );
}

export default App;
