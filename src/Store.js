import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from "./Reducers/Reducer";


const Store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //,composeWithDevTools(applyMiddleware(logger)) )

export default Store;




