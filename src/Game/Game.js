import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import gameReducers from './reducers';
import GameContainer from './containers/GameContainer';

class Game extends Component{
    
    constructor(props){
        super(props);
        this.state = { 
            store: createStore(gameReducers)
        };
    }

    render() {
        return (
            <div className='Game'>
                <Provider store={this.state.store}>
                    <GameUx/>
                </Provider>
            </div>
        );
    }

}

class GameUx extends Component{
    render(){
        return (
            <div className='GameUx'>
                <GameContainer/>
            </div>
        )
    }
}

export default Game

