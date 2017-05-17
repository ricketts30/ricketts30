import React, { PropTypes } from 'react';

const GameComponent = ({ incrementClick, decrementClick, counter}) => (
        <div>
            <p>counter: {counter} 
                <button onClick={() => incrementClick()}>+</button>
                <button onClick={() => decrementClick()}>-</button>
            </p>
        </div>
    )

GameComponent.propTypes = {
    incrementClick: PropTypes.func.isRequired,
    decrementClick: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}

export default GameComponent