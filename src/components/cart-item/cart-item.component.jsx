import React from 'react';
import data from '../../data';

import './cart-item.styles.css';

const CartItem = () => {

    const { img } = data[0];

    return(
        <div className='cart-item'>
            <img src={img} width='75px' />
            <div className='cart-item__product-details'>
                <h3>Product detail</h3>
                <p>Price</p>
                <button>Remove</button>
            </div>
            <div className='cart-item__product-quantity'>
                <span className='cart-item__button'>-</span> 1 <span className='cart-item__button'>+</span>
            </div>
        </div>
    )
}

export default CartItem;