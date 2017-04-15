

import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
                <a href="/">ricketts30</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/?page=action">Action</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/?page=About">About</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to ricketts30</h1>
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
