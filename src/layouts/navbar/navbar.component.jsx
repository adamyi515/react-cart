import React, { useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {GET_TOTAL_QUANTITY} from '../../redux/types';

import './navbar.styles.css';

const Navbar = () => {
    const totalQuantity = useSelector(state => state.totalQuantity); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GET_TOTAL_QUANTITY})
    }, [totalQuantity])
    

    return(
        <div className='navbar'>
            <div className='navbar-container'>
                <h1>Cart Example</h1>
                <div className='navbar__cart'>
                    Cart: { totalQuantity }
                </div>
            </div>
        </div>
    )
}

export default Navbar;