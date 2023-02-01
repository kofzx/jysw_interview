import { createStore, applyMiddleware } from 'redux'
import reducer from '../redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch

export default store