import React, {useEffect} from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { CALCULATE_TOTAL_AMOUNT } from '../../redux/types';

import './cart-list.styles.css';

// Components
import CartItem from '../cart-item/cart-item.component';

const CartList = () => {
    const carts = useSelector(state => state.carts);
    const totalAmount = useSelector(state => state.totalAmount);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: CALCULATE_TOTAL_AMOUNT})
    }, [totalAmount]);


    if(carts.length === 0){
        return(
            <h1 className='text-center'>Cart is EMPTY!</h1>
        )
    }

    return(
        <div className='cart-list'>
            {
                carts.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
            <div className='cart-list__border-bottom'></div>
            <div className='cart-list__total-amount'>
                <h3>Total</h3>
                <h3>$ {totalAmount.toFixed(2)}</h3>
            </div>
        </div>
    )
}
export default CartList;