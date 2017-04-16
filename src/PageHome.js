
import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';

import WidgetMenu from './WidgetMenu'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import './Page.css';

class PageHome extends Component {

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
        <Jumbotron className="PageTop">
          <Grid>
            <h1>ricketts30</h1>
            <p>A playground of React.js experiments...</p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default PageHome;
