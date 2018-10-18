import { combineReducers } from 'redux'
import messageReducers from './messageReducers'

export default combineReducers({
    message: messageReducers
})
