import React from 'react';

const Pic = (props) => {
    const { img,id } = props;
    console.log(props);
    return (
        <div>
            {/* <img src={img} alt="" srcset="" /> */}
            <p>{id}</p>

            <p>this is PicZ</p>
        </div>
    );
};

export default Pic;