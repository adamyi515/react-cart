import React from 'react';
import './cart-item.styles.css';

// Redux
import { useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, CLEAR_CART } from '../../redux/types';

const CartItem = ({ item: { amount: quantity, img, price, title, id } }) => {
    
    const dispatch = useDispatch();

    const handleIncrement = ev => {
        dispatch({type: INCREMENT, payload: id});
    }

    return(
        <div className='cart-item'>
            <img src={img} width='75px' />
            <div className='cart-item__product-details'>
                <h3>{ title }</h3>
                <p>{ price }</p>
                <button>Remove</button>
            </div>
            <div className='cart-item__product-quantity'>
                <span className='cart-item__button'>-</span> {quantity} <span className='cart-item__button' onClick={handleIncrement}>+</span>
            </div>
        </div>
    )
}

export default CartItem;