import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Header'
import './index.css'
import './Pages/CSS-Files/feedback.css'

import Home from './Pages/Home'
import About from './Pages/About'
import contact from './Pages/Contact'
import Blog from './Pages/Blog'
import './App.css';


class App extends Component{
  state = {
    feedbacks: [
      {
        id:1,
        feedback:"lorem ispum",
        name:"Technology 1",
        email:"something@gmail.com"
      },
      {
        id:2,
        feedback:"Praesent semper feugiat nibh sed pulvinar. Nibh mauris cursus mattis molestie a. Morbi non arcu risus quis varius quam quisque. Ac odio tempor orci dapibus ultrices in. Et egestas quis ipsum suspendisse ultrices. Nulla facilisi etiam dignissim diam quis enim. Eget magna fermentum iaculis eu. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.",
        name:"Technology 2",
        email:"something@gmail.com"
      },
      {
        id:3,
        feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Vulputate sapien nec sagittis aliquam. Urna nunc id cursus metus aliquam. Dignissim sodales ut eu sem integer vitae justo eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Id volutpat lacus laoreet non curabitur gravida arcu. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. ",
        name:"Technology 3",
        email:"something@gmail.com"
      }
    ]
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={contact}/>
          <Route path="/blog" render={props =>(
            <React.Fragment>
              <div className='feedback-heading'>Feedbacks: </div>
              <Blog feedbacks={this.state.feedbacks}/>
            </React.Fragment>
          )}/>
        </div>
      </Router>
    )
  }
}

export default App;