import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux';
import gcounter from './Greducers';

class GApp extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            store: createStore(gcounter),
            updated: null,
            created: new Date()
        };
        
        this.state.store.subscribe(
                () => this.setState({ updated: new Date() })
            );
    }

  render() {
      var v = this.state.store.getState();
      return (
        <div>
            <GAppUx
                value={v.counter}
                onIncrement={() => this.state.store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => this.state.store.dispatch({ type: 'DECREMENT' })}
            />
        </div>
    );
  }
}

class GAppUx extends Component {

    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
        this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

  render() {
      var dt = new Date();
      const { value, onIncrement, onDecrement } = this.props
     return (
        <div>
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                +
                </button>
                {' '}
                <button onClick={onDecrement}>
                -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                Increment async
                </button>
                {' '} and updated at { dt.toString() }
            </p>
            

       </div>
    );
  }

}

export default GApp;