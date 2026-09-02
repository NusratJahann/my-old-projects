  
import React from 'react';
// import { Spinner } from 'react-bootstrap';
import { Link, useMatch, Routes, Route } from 'react-router-dom';


const DashboardTomal = () => {
 
  let { path, url } = useMatch();
  console.log(url)
  
  // if(!admin){
  //   return <Spinner animation="border" variant="danger" />
  // }
  return (
    <div>
      <div className="dashboard-container ">
        <h2 style={{color:"white"}} className="  dashboards">Dashboard</h2>
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard pt-3">
        
            <Link style={{textDecoration:'none',color:'white',fontSize:23}} to='/home'> Home

            </Link>

              {

                <div>

                  <Link to={`${url}/makeAdmin`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                    <li className="dashboard-menu mt-4">Make Admin</li>
                  </Link>

                  <Link to={`${url}/manageOrder`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                <li className="dashboard-menu mt-4">Manage All Order</li>
              </Link>
                  <Link to={`${url}/addproducts`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                <li className="dashboard-menu mt-4">Add Products</li>
              </Link>

              <Link to={`${url}/manageProduct`} style={{textDecoration:'none',color:'white', fontSize:23}}>
                <li className="dashboard-menu mt-4">Manage Product</li>
              </Link>

              <Link to='/login'>
              <button className="mt-5 button"  color="inherit">Logout</button>
              </Link>
                </div>
              }


              {

                

                <div>

<Link to={`${url}/myOrder`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                <li className="dashboard-menu mt-4">My Order</li>
              </Link>
             
              <Link to={`${url}/review`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                <li className="dashboard-menu mt-3">Review</li>
              </Link>

              <Link to={`${url}/pay`} style={{textDecoration:'none',color:'white',fontSize:23}}>
                <li className="dashboard-menu ">pay</li>
              </Link>
               
               
           <Link to='/login'>
           
           <button className="mt-5 button"  color="inherit">Logout</button>

           </Link>

                </div>
              }



            </div>
          </div>
          <div className="col-md-9 tops mt-5" >
            <Routes>
              <Route exact path={path}>
               
              </Route>
              
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTomal;
