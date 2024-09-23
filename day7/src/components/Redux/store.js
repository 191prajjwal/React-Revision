
import  countReducer from './reducers'
import bgColorReducer from './BgColorReducer'
import {combineReducers, createStore} from "redux"

const reducers= combineReducers({
    count:countReducer,
    bgColor:bgColorReducer
})
const store =createStore(reducers)
export default store