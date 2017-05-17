import React, { Component } from 'react';

import { Button, ButtonGroup, OverlayTrigger, Popover } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class LmodNumberCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            intValue: props.initVal,
            theIdx: props.idx,
            display: 'xx',
        };
        this.informParent = this.informParent.bind(this);
    }

    componentWillMount(){
       this.setState(
           {display: this.props.getChar(this.state.intValue)}
       );
    }

    informParent(method, payload){
        this.props.callbackParent({ 'method' : method, 'payload' : payload }, this.state.theIdx);
    }

    render() {

        var things = [];
        for(var x = 0, z = this.props.getBase(); x < z; x++){
            things.push(this.props.getChar(x));
        }

        var buttons = things.map((curVal, idx) => {
                return (
                    <Button 
                        key={idx} 
                        bsSize="xsmall" 
                        ref="target" 
                        onClick={ () => {this.informParent('num',idx)} }
                        >{curVal}</Button>
                );
         });

    const popoverClickRootClose = (
      <Popover id="popover-trigger-click-root-close" className="LmodPop" >
        <p>{buttons}</p>
        <p>
            <ButtonGroup>
                <Button bsSize="xsmall" ref="target" onClick={ () => {this.informParent('left',null)} }>&lt;-</Button>
                <Button bsSize="xsmall" ref="target" onClick={ () => {this.informParent('delete',null)} }>x</Button>
                <Button bsSize="xsmall" ref="target" onClick={ () => {this.informParent('right',null)} }>-&gt;</Button>
                <Button bsSize="xsmall" ref="target" onClick={ () => {this.informParent('dot',null)} }>.</Button>
                <Button bsSize="xsmall" ref="target" onClick={ () => {this.informParent('sign',null)} }>±</Button>
            </ButtonGroup>
        </p>
    </Popover>
    );

        return (
            <span>
                <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
                    <Button>{this.state.display}</Button>
                </OverlayTrigger>
            </span>
        );
    }
}

export default LmodNumberCell;