import { GET_TOTAL_QUANTITY, INCREMENT, DECREMENT, CLEAR_CART, CALCULATE_TOTAL_AMOUNT, REMOVE_ITEM } from './types';

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
        return parseFloat(totalCartItemQuantity);
    }

    function calculateTotalAmount(newCarts) {
        let totalCartAmount = 0;
        if(newCarts){
            for(let i = 0; i < newCarts.length; i++){
                const totalPricePerItem = newCarts[i].amount * newCarts[i].price;
                totalCartAmount += totalPricePerItem;
            }
        } else {
            for(let i = 0; i < state.carts.length; i++){
                const totalPricePerItem = state.carts[i].amount * state.carts[i].price;
                totalCartAmount += totalPricePerItem;
            }
        }

        return parseFloat(totalCartAmount);
    }

    // ACTIONS ////////////////////////////////////////////////////////////
    if(action.type === GET_TOTAL_QUANTITY){
        let totalQuantity = getTotalQuantity();
        return {
            ...state,
            totalQuantity
        }
    }

    if(action.type === CALCULATE_TOTAL_AMOUNT){
        let totalAmount = calculateTotalAmount();
        return {
            ...state,
            totalAmount
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
        let totalAmount = calculateTotalAmount(newCarts);
        return {
            ...state,
            carts: newCarts,
            totalQuantity,
            totalAmount
        };
    }

    if(action.type === DECREMENT){
        const newCarts = state.carts.map(item => {
            if(item.id === action.payload){
                return {...item, amount: item.amount - 1 }
            }
            return item;
        }).filter((item) => item.amount !== 0);

        let totalQuantity = getTotalQuantity(newCarts);
        let totalAmount = calculateTotalAmount(newCarts);
        return {
            ...state,
            carts: newCarts,
            totalQuantity,
            totalAmount
        };
    }

    if(action.type === REMOVE_ITEM){
        console.log(action.payload);
        const newCarts = state.carts.filter(item => item.id !== action.payload);
        let totalQuantity = getTotalQuantity(newCarts);
        let totalAmount = calculateTotalAmount(newCarts);
        
        console.log('REMOVE ITEM');
        return {
            ...state,
            carts: newCarts,
            totalQuantity,
            totalAmount
        }
    }

    return state;
}

export default reducer;