import { combineReducers } from 'redux';
import CardsReducer from './CardsReducer.js';
// import CounterReducer from './CounterReducer';
// import TimesClickedReducer from './TimesClickedReducer'

export default combineReducers({
    cards: CardsReducer,
})