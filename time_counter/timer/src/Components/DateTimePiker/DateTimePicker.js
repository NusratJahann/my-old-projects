import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const DateTimePicker = (props) => {
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [timeData, setTimeData] = useState([]);
  const [minute, setMinute] = useState();
  const [hour, setHour] = useState();
  const [ampm, setAmpm] = useState();
  const { register, handleSubmit } = useForm();
  
  const {title,setTimefn} = props;
  
  // setEndTime(data);
  const allDaysInMonth = [];
  const allYears = [];
  const allMonths = ["January", "February","March","April", "May","June","July","August","September","October", "November","December",];
  const allHours = [];
  const allMinutes = [];
  const allAmPm = ["AM","PM"];


  //---------------------------making section start---------------------------
  //---making dropdown for hours
  for (let i = 1; i < 13; i++) {
    allHours.push(i);
  }

  //---making dropdown for minutes
  for (let i = 0; i < 60; i++) {
    allMinutes.push(i);
  }

  //---making dropdown for years
  for(let i = 0;i<10; i++){
    allYears.push(i+dayjs().year());
  }

  //---making dropdown for days
  let mew = dayjs(dayjs().month(allMonths.indexOf(month))).daysInMonth();
  for (let i = 0; i < mew ; i++) {
      allDaysInMonth.push(i+1);
  }

  //---making dropdown for years
  for(let i = 0;i<10; i++){
    allYears.push(i+dayjs().year());
  }
  //---------------------------making section end---------------------------

  //---taking month input
  const handleSelectMonth = (e) => {
    console.log("month ",e.target.value);
    setMonth(e.target.value);
  }

  //---taking year input
  const handleSelectYear = (e) => {
    console.log("year ",e.target.value);
    setYear(e.target.value);
  }

  //---getting from data
  const onSubmit = (data) => {
    if (title === "Start Time") {
      console.log("start time");
      setTimefn(data);
    }else if(title==="End Time"){
      console.log("end time")
      setTimefn(data);
    }
   
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <form onSubmit={handleSubmit(onSubmit)}>

       

       
        
        {/* ---card---  */}
        <div className="card w-96 bg-base-100 shadow-[0px_0px_20px_5px_rgba(0,0,0,0.1)] border-[4px]">
          
          {/* ---card body--- */}
            <div className="card-body flex p-5">
              
              {/* ---title--- */}
              <h2 className="card-title">{title}</h2>
              

              <div className="flex">

                {/* ---month--- */}
                <label type="text" className="justify-center input input-bordered flex items-center h-auto input-info  w-full max-w-xs">
                    <select className="text-center dropdown dropdown-hover hover:bg-blue-100 flex justify-center align-middle dropdown-content appearance-none p-1 pb-1 shadow bg-base-100 rounded-md w-auto outline-0" onClick={handleSelectMonth} {...register("month")}>
                        {allMonths.map((x)=><option className="   flex   hover:bg-slate-100 rounded-md  justify-center" value={x} >{x}</option>)}
                    </select>
                </label>
                <p className="  ">/</p>


                {/* ---date--- */}
                <label type="text" className="justify-center input input-bordered flex items-center h-auto input-info  w-full max-w-xs">
                    <select className="text-center dropdown dropdown-hover hover:bg-blue-100 flex justify-center align-middle dropdown-content appearance-none p-1 pb-1 shadow bg-base-100 rounded-md w-auto outline-0" {...register("date")}>
                        {allDaysInMonth.map((x)=><option className="   flex   hover:bg-slate-100 rounded-md  justify-center" value={x}>{x}</option>)}
                    </select>
                </label>
                <p className="  ">/</p>


                {/* ---day--- */}
                <label type="text" className="justify-center input input-bordered flex items-center h-auto input-info  w-full max-w-xs">
                    <select className="text-center dropdown dropdown-hover hover:bg-blue-100 flex justify-center align-middle dropdown-content appearance-none p-1 pb-1 shadow bg-base-100 rounded-md w-auto outline-0" onClick={handleSelectYear} {...register("year")}>
                        {allYears.map((x)=><option className="   flex   hover:bg-slate-100 rounded-md  justify-center" value={x}>{x}</option>)}
                    </select>
                </label>
                
              </div>
              
              {/******** hour minute now ********/}

              <div className="flex">

                {/* ---hour--- */}
                <label type="text" className="justify-center input input-bordered flex items-center h-auto input-info  w-full max-w-xs">
                    <select className="text-center dropdown dropdown-hover hover:bg-blue-100 flex justify-center align-middle dropdown-content appearance-none p-1 pb-1 shadow bg-base-100 rounded-md w-auto outline-0" {...register("hour")}>
                        {allHours.map((x)=><option className="   flex   hover:bg-slate-100 rounded-md  justify-center" value={x} >{x}</option>)}
                    </select>
                </label>
                <p className="  ">:</p>


                {/* ---minute--- */}
                <label type="text" className="justify-center input input-bordered flex items-center h-auto input-info  w-full max-w-xs">
                    <select className="text-center dropdown dropdown-hover hover:bg-blue-100 flex justify-center align-middle dropdown-content appearance-none p-1 pb-1 shadow bg-base-100 rounded-md w-auto outline-0" {...register("minute")}>
                        {allMinutes.map((x)=><option className="   flex   hover:bg-slate-100 rounded-md  justify-center" value={x}>{x}</option>)}
                    </select>
                </label>
                <p className="  ">:</p>


                {/* ---ampm--- */}
                <label type="text" className="justify-center input input-bordered flex items-center h-auto input-info  w-full max-w-xs">
                    <select className="text-center dropdown dropdown-hover hover:bg-blue-100 flex justify-center align-middle dropdown-content appearance-none p-1 pb-1 shadow bg-base-100 rounded-md w-auto outline-0" {...register("ampm")}>
                        {allAmPm.map((x)=><option className="   flex   hover:bg-slate-100 rounded-md  justify-center" value={x}>{x}</option>)}
                    </select>
                </label>

                
                
              </div>

            {/* taking input button */}
            <div className="flex pt-2 justify-center">
            
            { title === "Start Time" ?
             
              <Link to="/endttime"  className="w-full  btn  btn-outline btn-info"> <input value="mew" type="submit"></input> </Link>
            :
              <input className="w-full  btn  btn-outline btn-info" value="mew" type="submit" />
            }
            </div>               

            </div>

           

        </div>





        
      </form>
    </div>
  );
};

export default DateTimePicker;
