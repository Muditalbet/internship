import React, { Component } from 'react'
import '../Pages/CSS-Files/feedback.css'
var pad ={
    paddingBottom:'0px'
}


export class FeedBacks extends Component {
    render() {
        return (
            <div className='feedback-block' style={pad}>
                <h2>{ this.props.feedback.name }:</h2>
                <p>{ this.props.feedback.feedback }</p>
            </div>
        )
    }
}
export default FeedBacks
