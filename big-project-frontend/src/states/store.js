import { combineReducers, createStore } from 'redux';
import addItem from "../reducers/addItem";
import productReducer from '../reducers/productReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    add: addItem,
    slide: addItem,
    product: productReducer,
});

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducers );


export default store;