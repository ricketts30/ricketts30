import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';

import WidgetMenu from './WidgetMenu'
import WidgetMyChart from './WidgetMyChart'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import './Page.css';

class PageAlpha extends Component {

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
            <h1>Alpha</h1>
          </Grid>
        </Jumbotron>
        <Grid>
            <p>This page contains what I am currently tinkering with. Nothing here is likely to be stable or even working!</p>
            <p>using d3 with react-d3-wrap:</p>
            <WidgetMyChart data={ [0, 1, 2] } width={400} height={300} options={ {color: '#ff0000'} } />

            <h2>References</h2>
            <ul>
                <li><a href='https://oli.me.uk/2015/09/09/d3-within-react-the-right-way/'>https://oli.me.uk/2015/09/09/d3-within-react-the-right-way/</a></li>
            </ul>
        </Grid>
      </div>
    );
  }
}

export default PageAlpha;
