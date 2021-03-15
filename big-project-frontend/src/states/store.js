import { combineReducers, createStore } from 'redux';
import addItem from "../reducers/addItem";
import productReducer from '../reducers/productReducer';

const rootReducers = combineReducers({
    add: addItem,
    slide: addItem,
    product: productReducer,
});

const store = createStore( rootReducers );


export default store;