import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './cart-list.styles.css';

// Components
import CartItem from '../cart-item/cart-item.component';

const CartList = () => {
    const carts = useSelector(state => state.carts);
    const totalAmount = useSelector(state => state.totalAmount);

    return(
        <div className='cart-list'>
            {
                carts.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
            <div className='cart-list__border-bottom'></div>
            <div className='cart-list__total-amount'>
                <h3>Total</h3>
                <h3>$ {totalAmount}</h3>
            </div>
        </div>
    )
}
export default CartList;