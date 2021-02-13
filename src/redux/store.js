import {createStore} from 'redux';

 import {cartReducr} from './Reducer/cartReducer';

const store = createStore(cartReducr);

export default store;
