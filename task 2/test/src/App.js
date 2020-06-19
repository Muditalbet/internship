import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './Pages/About'
import './App.css';
import Navbar from './components/Header'

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={props =>(
            <React.Fragment>
              Hello World
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;