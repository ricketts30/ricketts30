import { combineReducers } from 'redux';
import increment from './increment';

const gameReducers = combineReducers({
    increment
})

export default gameReducers