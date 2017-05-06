import React, { Component } from 'react';
import LmodNumberCell from './LmodNumberCell'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class LmodNumber extends Component {

    constructor(props) {
        super(props);
        this.state = {
            baseLimit: 0,
            valueChars: ['〇','一','二','三','四','五','六','七','八','九'],
            cells:[],
            act: '',
        };

        this.getBase = this.getBase.bind(this);
        this.getValueChar = this.getValueChar.bind(this);
    }

    getBase(){
        return this.state.baseLimit;
    }

    getValueChar(val){
        return this.state.valueChars[val];
    }

    componentWillMount(){
      this.setState({baseLimit: this.state.valueChars.length});
      this.state.cells.push(
        <LmodNumberCell 
            initVal={0} 
            idx={0} 
            getChar={ (x) => this.getValueChar(x) } 
            getBase={ () => this.getBase() }
            callbackParent={(newState,i) => this.onChildChanged(newState,i) } 
            />
            );
    }

    componentDidMount(){
      
    }
    
    componentWillUnmount(){

    }

    onChildChanged(state, idx){
        this.setState({'act': 'idx:' + idx + ', method: ' + state.method + ', payload: ' + state.payload});
    }

    render() {

        const cellsWithKeys = this.state.cells.map((curVal, idx) => {
                return (
                    <span key={idx}>
                        {curVal}
                    </span>
                );
         });

        return (
            <div>
                <pre>LmodNumber (base: {this.state.baseLimit})</pre>
                <p>{this.state.act}</p>
                <p>{cellsWithKeys}</p>
            </div>
        );
    }
}

export default LmodNumber;

