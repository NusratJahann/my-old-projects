// import dayjs from 'dayjs';
import React from 'react';
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);


const RemainingTime = () => {
    // let now = dayjs(new Date())

    // const dayjs = require('dayjs');

    const time1 = '2023-04-08T09:00:00Z';
    const time2 = '2023-04-08T17:30:00Z';
  
    const duration = dayjs.duration(dayjs(time2).diff(dayjs(time1)));
  

    console.log(duration)
    return (
        <div>
            <p>mew</p>
        </div>
    );
};

export default RemainingTime;