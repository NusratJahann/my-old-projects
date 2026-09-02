import React, { useState } from 'react';
import DateTimePicker from '../DateTimePicker';
import Navbar from '../../Navbar/Navbar';


const EndDateTimePick = () => {
    const [endTime, setTimefn] = useState({});
    console.log(endTime);
    return (
        <div>
             <Navbar></Navbar>
            <DateTimePicker title={"End Time"} setTimefn={setTimefn}></DateTimePicker>
        </div>
    );
};

export default EndDateTimePick;