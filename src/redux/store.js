import { createStore } from 'redux';

// Redux
import reducer from './reducer';

// Data
import carts from '../data';


const intialStore = {
    carts: carts,
    totalAmount: 0,
    totalQuantity: 0
}

export const store = createStore(reducer, intialStore);