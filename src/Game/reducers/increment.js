import GameInitialState from './GameInitialState';

const increment = (state = GameInitialState.Create(), action) => {
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({}, state, { counter: state.counter + 1});
        case 'DECREMENT':
            return Object.assign({}, state, { counter: state.counter - 1});
        default:
            return state;    
    }
}

export default increment