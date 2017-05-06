import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';

import WidgetMenu from './WidgetMenu'

import GApp from './GApp'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import './Page.css';

class PageRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qString: props.qString,
            store: createStore(todoApp)
        };
    }

  render() {
    return (
      <div>
        <WidgetMenu qString={this.state.qString} />
        <Jumbotron className="PageTop">
          <Grid>
            <h1>Redux</h1>
          </Grid>
        </Jumbotron>
        <Grid>
            <p>This is a page for playing with Redux-based programming</p>
            <h2>Todo App</h2>
            <p>This is the standard todo list application from the redux &amp; react tutorial.</p>

            <Provider store={this.state.store}>
              <App />
            </Provider>
            
            <h2>GApp</h2>
              <p>This is a fully self-contained Redux-based React component</p>
              <GApp/>
              <p>In fact there are two instances on this page and they 
                are fully separate from each other (and share no state).</p>
              <GApp/>
              <p>Although I fully admit that they don't do much!</p>

              <h2></h2>

            <h2>References</h2>
            <ul>
                <li><a href='http://redux.js.org/'>Redux.js.org</a></li>
                <li><a href='http://redux.js.org/docs/basics/UsageWithReact.html'>Redux and React.js</a></li>
            </ul>
        </Grid>
      </div>
    );
  }
}

export default PageRedux;
