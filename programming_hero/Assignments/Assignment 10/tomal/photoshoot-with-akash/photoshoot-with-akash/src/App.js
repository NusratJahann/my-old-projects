import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Components/Home/Home';
import Home from './Components/Home/Home'
import About from './Components/About/About';
// import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Notfound from './Components/Notfound/Notfound';
import Register from './Components/Account/Registers/Register';
import Login from './Components/Account/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Checking from './Components/Checking/Checking';
import ServiceDetails from './Components/Data/ServiceDetails';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      {/* <Header></Header> */}
    <AuthProvider>
    <BrowserRouter>
      {/* <Header></Header> */}
      <Navigation></Navigation>
     
      <Switch>
      <Route exact path="/">
            <Home></Home>
        </Route>
        
        <Route path="/home">
            <Home></Home>
        </Route>
        
        {/* <PrivetRoute path="/serviceDetails/:id">
            <ServiceDetails></ServiceDetails>
         
        </PrivetRoute> */}
        <Route path="/about">
            <About></About>
        </Route>
        <Route path="/blog">
            <Blog></Blog>
        </Route>
        <Route path="/gallery">
            <Gallery></Gallery>
        </Route>
        <Route path="/contact">
            <Contact></Contact>
        </Route>
        <Route path="/reg">
            <Register></Register>
        </Route>
        <Route path="/log">
            <Login></Login>
        </Route>
        <PrivetRoute path="/serviceDetails/:id">
            <ServiceDetails></ServiceDetails>
         
        </PrivetRoute>
        
        <Route path="*">
           <Notfound></Notfound>
        </Route>
    
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
      
    </div>
  );
}

export default App;

