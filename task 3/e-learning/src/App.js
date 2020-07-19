import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar'

import Home from './pages/home'
import Overview from './pages/overview'
import Course from './pages/course'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/overview" component={Overview}/>
        <Route path="/course" component={Course}/>
      </>
    </Router>
  );
}

export default App;
