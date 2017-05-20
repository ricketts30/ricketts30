import { connect } from 'react-redux';
import { actionIncrement, actionDecrement, actionStart } from '../actions';
//import GameComponent from '../components/GameComponent';
import GameClassComponent from '../components/GameClassComponent';


const mapStateToProps = (state) => {
    return {
        counter: state.increment.counter,
        stateName: state.increment.stateName,
        player: state.increment.player,
        mode: state.increment.mode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementClick: () => { dispatch(actionIncrement()) },
        decrementClick: () => { dispatch(actionDecrement()) },
        startClick: (player,mode) => { dispatch(actionStart(player,mode)) },
    }
}

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameClassComponent)

export default GameContainer
