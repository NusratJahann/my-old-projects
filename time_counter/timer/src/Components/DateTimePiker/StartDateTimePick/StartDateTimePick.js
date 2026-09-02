import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import DateTimePicker from '../DateTimePicker';

const StartDateTimePick = () => {
    const [startTime, setTimefn] = useState({});
    console.log(startTime);
    return (
        <div>
             <Navbar></Navbar>
            <DateTimePicker title={"Start Time"} setTimefn={setTimefn} ></DateTimePicker>
        </div>
    );
};

export default StartDateTimePick;