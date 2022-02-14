import React from 'react';

import './cart.styles.css';

// Components
import CartList from '../cart-list/cart-list.component';

const Cart = () => {
    return(
        <div className='cart'>
            <h1 className='text-center'>Your Bag</h1>
            <CartList />
        </div>
    )
}

export default Cart;