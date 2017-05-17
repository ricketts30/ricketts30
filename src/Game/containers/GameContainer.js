import { connect } from 'react-redux';
import { actionIncrement, actionDecrement } from '../actions';
import GameComponent from '../components/GameComponent';

const mapStateToProps = (state) => {
    console.log("state:", state);
    return {
        counter: state.increment.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementClick: () => { dispatch(actionIncrement()) },
        decrementClick: () => { dispatch(actionDecrement()) },
    }
}

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameComponent)

export default GameContainer
