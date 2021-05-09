// import {createStore} from "redux";
// import Reducer from './reducer';

// const store = createStore(Reducer)

// export default store;

import contentReducer from './reducer'
import {combineReducers} from "redux"
const allReducers= combineReducers({
    actions:contentReducer
}) 
export default allReducers;