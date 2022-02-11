import { combineReducers } from 'redux'
import listReducer from './lists'
import productReducer from './product'

export default combineReducers({
  lists: listReducer,
  product: productReducer
})