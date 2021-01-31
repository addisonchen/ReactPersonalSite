import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";

import useWindowSize from './hooks/useWindowSize';

function App() {

  const { width, height } = useWindowSize();

  return (
    <Router>
      <Menu width={ width } />

      <Route exact path="/" render={props => (
        <React.Fragment>
          <Home />
        </React.Fragment>
      )} />
    </Router>
  );
}

export default App;
