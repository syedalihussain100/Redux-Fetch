import {createStore,applyMiddleware} from 'redux';
import authReducer from './reducer/authReducer';
import thunk from 'redux-thunk';


const store = createStore(authReducer,applyMiddleware(thunk));




export default store;