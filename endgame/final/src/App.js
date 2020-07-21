import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar'

import Home from './Pages/Home' 

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route exact path='/' component={Home}></Route>
      </Router>
    </>
  );
}

export default App;
