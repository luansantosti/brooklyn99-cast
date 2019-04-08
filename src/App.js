import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components'

import './assets/Style.css';
import Header from './Header'
import Home from './Home'
import Detail from './Detail'

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0px 15px 40px 15px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container>
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={Detail} />
          </Container>
        </div>
      </Router>     
    );
  }
}



export default App;