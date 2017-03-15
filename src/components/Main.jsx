import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from 'material-ui/AppBar'

import Home from './Home';
import About from './About';
import Topics from './Topics';

class Main extends React.Component {
  render() {
    return <Router>
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Photosintese Painel"
            showMenuIconButton={false}
          />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </MuiThemeProvider>
    </Router>
  }
}

export default Main