import { GET_TOTAL_QUANTITY, INCREMENT, DECREMENT, CLEAR_CART } from './types';

const reducer = (state, action) => {

    // Methods
    function getTotalQuantity(newCarts) {
        let totalCartItemQuantity = 0;
        if(newCarts){
            for(let i = 0; i < newCarts.length; i++){
                totalCartItemQuantity += newCarts[i].amount;
            }
        } else {
            for(let i = 0; i < state.carts.length; i++){
                totalCartItemQuantity += state.carts[i].amount;
            }
        }
        return totalCartItemQuantity;
    }

    // ACTIONS ////////////////////////////////////////////////////////////
    if(action.type === GET_TOTAL_QUANTITY){
        let totalQuantity = getTotalQuantity();
        return {
            ...state,
            totalQuantity
        }
    }

    if(action.type === INCREMENT){
        const newCarts = state.carts.map(item => {
            if(item.id === action.payload){
               return {...item, amount: item.amount + 1 }
            }
            return item;
        });

        let totalQuantity = getTotalQuantity(newCarts);

        return {
            ...state,
            carts: newCarts,
            totalQuantity
        };
        
    }


    return state;
}

export default reducer;