

import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Home</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to Rickett30</h1>
            <p>A playground of React.js experiments...</p>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
            <p><img src={logo} className="App-logo" alt="logo" /></p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
