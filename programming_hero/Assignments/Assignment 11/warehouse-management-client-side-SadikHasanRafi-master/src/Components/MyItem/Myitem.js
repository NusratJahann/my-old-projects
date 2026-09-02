import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import useFirebase from '../Hook/useFirebase';
import Products from '../Products/Products';

const MyItem = () => {

    const { userName } = useFirebase()
    

    

    return (
        <div>
            <p>this is item page</p>
            <p>this is display {userName}</p>
            <Products></Products>
            {/* here all the product of manage item will be shown and also user's name pic and other info */}
        </div>
    );
};

export default MyItem;