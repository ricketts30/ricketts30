
import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';

import WidgetMenu from './WidgetMenu'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import './Page.css';

import myPicture from './howard-g-ricketts.png';

class PageAbout extends Component {

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
            <h1>About ricketts30</h1>
            </Grid>
        </Jumbotron>
        <Grid>
            <p>A playground of React.js experiments.</p>
            <p>Written by Howard Geraint Ricketts</p>
            <p><img src={myPicture} alt="Howard Geraint Ricketts" /></p>
            <p>The source code for this website is located at <a href='https://github.com/ricketts30/ricketts30'>GitHub</a></p>
        </Grid>
      </div>
    );
  }
}

export default PageAbout;
