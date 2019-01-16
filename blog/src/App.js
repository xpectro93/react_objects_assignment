import React, { Component } from 'react';
import './App.css';
import Feed from './feed.js'


let allPosts = require('./blog_posts.json')

class App extends Component {
  constructor(){
    super()
    this.state = {
      //allPosts is an Array of Obj [{a:1,a:2}]
      allPosts: allPosts,
      postTitle:"",
      postBody:"",
      message:""
    }
  }

  handleChange =(event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  };
  //this needs use postTitle and postBody to add a new post on the array obj we have on App
  handleSubmit = (e) => {
    const {postTitle, postBody} = this.state;
    let tempState = this.state.allPosts.slice(0)

    e.preventDefault();
    if(postTitle && postBody){
      tempState.push({
        id:tempState.length+1,
        title:postTitle,
        body:postBody
    })
    }
    this.setState({
      allPosts: tempState
    })
  }



  render() {

    return (
      <div className="App">
      <Feed
      handleSubmit={this.handleSubmit}
      allPosts={this.state.allPosts}
      handleChange={this.handleChange}
      postTitle={this.state.title}
      postBody={this.state.body}
      />
      {this.state.message}
      </div>
    );
  }
}

export default App;
