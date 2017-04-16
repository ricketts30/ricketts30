
import React, { Component } from 'react';
import { Grid, Button } from 'react-bootstrap';

import WidgetMenu from './WidgetMenu'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

class PagePlots extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qString: props.qString,
        };
    }

  render() {
    return (
      <div>
        <WidgetMenu qString={this.state.qString} />
          <Grid className="PageTop">
            <h1>Plots</h1>
            <p>protagonist: </p>
            <p>place: </p>
            <p>threat: </p>
            <p>focus: </p>
            <p>partner: </p>
            <p>power: </p>
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
