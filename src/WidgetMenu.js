import React, { Component } from 'react';
import { Navbar, Grid, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class WidgetMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qString: props.qString,
        };
    }

  render() {
    return (
        
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
                <NavItem eventKey={1} href="/?page=alpha">Alpha</NavItem>
                <NavDropdown eventKey={2} title="Writing" id="basic-nav-dropdown-writing">
                  <MenuItem eventKey={2.1} href="/?page=plots" >Plots</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={3} title="Games" id="basic-nav-dropdown-games">
                  <MenuItem eventKey={3.1} href="/?page=hareandhounds">Hare and Hounds</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={4} title="Tech" id="basic-nav-dropdown-tech">
                  <MenuItem eventKey={4.1} href="/?page=redux" >Redux</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/?page=About">About</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
       
    );
  }
}

export default WidgetMenu;