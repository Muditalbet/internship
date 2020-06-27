import React, { Component } from 'react';
import FeedBacks from '../components/FeedBacks'

class Blog extends Component{
    render(){
        return  this.props.feedbacks.map((feedback) => (
            <FeedBacks key={feedback.id} feedback={feedback}/>
        ))
    }
}

export default Blog;