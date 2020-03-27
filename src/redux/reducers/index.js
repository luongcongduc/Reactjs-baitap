import {combineReducers} from "redux";
import userReducer from './userReducer'
import giohangreducer from './liftingstateReducer'
const rootReducers = combineReducers({
    userReducer, // userReducer : userReducer,
    giohangreducer
})

export default rootReducers;