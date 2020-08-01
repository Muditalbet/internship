import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './Pages/Home'

import Angular from './Pages/Courses/Angular/Angular'
import C_plus_plus from './Pages/Courses/C++/C++'
import Flutter from './Pages/Courses/Flutter/Flutter'
import Java from './Pages/Courses/Java/Java'
import Javascript from './Pages/Courses/Javascript/Javascript'
import Python from './Pages/Courses/Python/Python'
import REACT from './Pages/Courses/React/React'
import Swift from './Pages/Courses/Swift/Swift'

import Pythoncourse from './Pages/Courses/Python/Pythoncourse'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route path='/Python' component={Python}></Route>
        <Route path='/Angular' component={Angular}></Route>
        <Route path='/Java' component={Java}></Route>
        <Route path='/Javascript' component={Javascript}></Route>
        <Route path='/Flutter' component={Flutter}></Route>
        <Route path='/React' component={REACT}></Route>
        <Route path='/Swift' component={Swift}></Route>
        <Route path='/C++' component={C_plus_plus}></Route>
        <Route path='/course' component={Pythoncourse}></Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
