import { connect } from 'react-redux';
import { actionIncrement, actionDecrement, actionStart } from '../actions';
import GameComponent from '../components/GameComponent';

const mapStateToProps = (state) => {
    console.log("state:", state);
    return {
        counter: state.increment.counter,
        stateName: state.increment.stateName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementClick: () => { dispatch(actionIncrement()) },
        decrementClick: () => { dispatch(actionDecrement()) },
        startClick: () => { dispatch(actionStart()) },
    }
}

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameComponent)

export default GameContainer
