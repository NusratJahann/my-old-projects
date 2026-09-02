import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';
// import useAuth from './';
const Navigation = () => {
  const {user,logout}=useAuth()
    return (
        <div>

<nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <Link to="/"> <span className="ms-3 text-white font-mono text-2xl hidden lg:block text-decoration-none">PhotoGraphy with Akash</span></Link>
              <div>
                <ul className="ms-auto mb-2 mb-lg-0 d-flex flex-wrap align-items-center">
                  <li className="nav-item">
                  
                    <Link className="nav" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link className="nav" to="/gallery">Gallery</Link>
                  </li>

                 
            

        <li className="nav-item">
                  <Link className="nav" to="/contact">Contact</Link>
                   </li>
        <li className="nav-item">
                  <Link className="nav" to="/blog">Blog</Link>
                   </li>
        <li className="nav-item">
                  <Link className="nav" to="/about">About</Link>
                   </li>
                 
                
                  <li className="nav-item">
                  {/* <Link className="nav" to="/login">Login</Link> */}
                  {
                       
                       user?.email ?
                       <div className='p-2'>
                         
                         
           
                       <button className='button' onClick={logout} color="inherit">Logout</button>
                       </div>
                      
                     
                       :
                       <NavLink style={{textDecoration:'none',color:'white'}} to='/log'>
                       <button className='button' color="inherit">Login</button>
                       </NavLink>
                     
                     
                  }
                
               
                  </li>
                
                  {/* <li className="nav-item">
                  <Link className="nav" to="/piece">Three-Piece</Link>
                  </li> */}
                  {/* <li className="nav-item">
                  <Link className="nav" to="/service">Services</Link>
                  </li> */}



                
                 
                
                </ul>
               
              </div>
            </div>
          </nav>


    
            
        </div>
    );
};

export default Navigation;