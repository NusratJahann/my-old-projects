import React from 'react';
import { Watch } from "react-loader-spinner";


const Loading = () => {
    return (
        <div>
            <Watch
                height="80"
                width="80"
                radius="48"
                color="#dc2626"
                ariaLabel="watch-loading"
                wrapperStyle={{ display: 'flex' , justifyContent: 'center' , alignItems: "center", height: '100vh' }}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loading;