import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login'



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}/>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

