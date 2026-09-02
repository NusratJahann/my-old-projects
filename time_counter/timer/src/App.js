import Clock from "./Components/Clock/Clock";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import DateTimePicker from "./Components/DateTimePiker/DateTimePicker";
import { Route, Routes } from "react-router-dom";
import StartDateTimePick from "./Components/DateTimePiker/StartDateTimePick/StartDateTimePick";
import EndDateTimePick from "./Components/DateTimePiker/EndDateTimePick/EndDateTimePick";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element ={<StartDateTimePick></StartDateTimePick>}></Route>
        <Route path="/login" element ={<Login></Login>}></Route>
        <Route path="/endttime" element ={<EndDateTimePick></EndDateTimePick>}></Route>
      </Routes>
     
      {/* <Clock></Clock> */}
      {/* <StartDateTimePick></StartDateTimePick> */}
      {/* <EndDateTimePick></EndDateTimePick> */}
      {/* <DateTimePicker></DateTimePicker> */}
      {/* <Login></Login>  */}
    </div>
  );
}

export default App;
