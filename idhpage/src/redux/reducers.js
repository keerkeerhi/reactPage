import home from '../views/HomeRedux';
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    routing,
    home
})

export default rootReducer
