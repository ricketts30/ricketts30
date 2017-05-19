
import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';

import WidgetMenu from './WidgetMenu'

import Game from './Game/Game';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import './Page.css';

class PageHareAndHounds extends Component {

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
            <h1>Hare and Hounds</h1>
            <p>The rules of the game can be found at: <a href="https://en.wikipedia.org/wiki/Hare_games">https://en.wikipedia.org/wiki/Hare_games</a></p>    
          </Grid>
        </Jumbotron>

        <div className="contentBelowJumbtron">

        <Game/>

        </div>
      </div>
    );
  }
}

export default PageHareAndHounds;
