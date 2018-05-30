import {createStore,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {contactsReducer} from './contact/reducers'
const allReducers = combineReducers({contactsReducer})

export default function configStore() {
    return createStore(allReducers,applyMiddleware(thunk))
}