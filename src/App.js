import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home'
import Detail from './Detail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={Detail} />
        </div>
      </Router>     
    );
  }
}



export default App;