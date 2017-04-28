import React, { Component } from 'react';

class GFRState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fenNotation: null,
            isValid: false,
            verticalCount: 0,
            nextPlayer: null,
            squares: [],
        };

        this.getFenNotation = this.getFenNotation.bind(this);
        this.getIsValid = this.getIsValid.bind(this);
        this.setFenNotation = this.setFenNotation.bind(this);
        this.setToStart =this.setToStart.bind(this);
    }

    getIsValid(){
        return this.state.isValid;
    }

    setFenNotation(fenStr, next){
        var pIsValid = false;
        var pVerticalCount = 0;
        var pNextPlayer = null;
        var pSquares = [ null, null, null, null, null, null, null, null, null, null, null ];
        var pFenNotation = fenStr;
        var counter = 0;
        for(var idx = 0, lm = pFenNotation.length; idx < lm; idx++){
            var token = pFenNotation[idx];
            console.log("pFEN: " + token);
        }
        if(pIsValid){
            this.setState({
                isValid: pIsValid,
                verticalCount: pVerticalCount,
                nextPlayer: pNextPlayer,
                fenNotation: pFenNotation,
                squares: pSquares
            }, next);
        }else{
            this.setState({
                isValid: false,
                verticalCount: 0,
                nextPlayer: null,
                fenNotation: null,
                squares: []
            }, next);
        }
    }

    getFenNotation(){
        return this.state.fenNotation;
    }

    setToStart(next){
        var pIsValid = true;
        var pVerticalCount = 0;
        var pNextPlayer = 'F';
        var pSquares = [ 'F', null, null, 'F', null, null, null, 'R', 'F', null, null ];
        var pFenNotation = 'F2F3RF2,0,F';
        this.setState({
                isValid: pIsValid,
                verticalCount: pVerticalCount,
                nextPlayer: pNextPlayer,
                fenNotation: pFenNotation,
                squares: pSquares
            }, next);
    }

}

export default GFRState;