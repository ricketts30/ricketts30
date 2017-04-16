
import React, { Component } from 'react';
import { Grid, Button, FormGroup, FormControl, ControlLabel, Col, Form } from 'react-bootstrap';

import WidgetMenu from './WidgetMenu'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

class PagePlots extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qString: props.qString,
            protagonist: "Theresa May",
            partner: "Boris Johnson",
            peril: "Brexit",
            place: "The EU Parliament",
            passion: "a love of being overly smug",
            power: "President Trump"
        };
    }

  render() {
    return (
      <div>
        <WidgetMenu qString={this.state.qString} />
          <Grid className="PageTop">
            <h1>Plots</h1>
            
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>Protagonist</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Protagonist" value={this.state.protagonist} /></Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>Partner</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Partner" value={this.state.partner} /></Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>Place</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Place" value={this.state.place} /></Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>Peril</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Peril" value={this.state.peril}/></Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>Passion</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Passion" value={this.state.passion} /></Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>Power</Col>
                  <Col sm={10}><FormControl type="text" placeholder="Power" value={this.state.power} /></Col>
                </FormGroup>
            </Form>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                Generate
              </Button>
            </p>
          </Grid>
        
      </div>
    );
  }
}

export default PagePlots;
