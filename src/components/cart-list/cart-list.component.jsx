import React from 'react';

import './cart-list.styles.css';

// Components
import CartItem from '../cart-item/cart-item.component';

const CartList = () => {
    return(
        <div className='cart-list'>
            <CartItem />
            <CartItem />
        </div>
    )
}
export default CartList;