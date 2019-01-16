import React from "react";
import Post from './post';
import { PostForm } from './PostForm'



class Feed extends React.Component {

  render() {
    let { allPosts,
          handleSubmit,
          handleChange,
          postBody,
          postTitle
        } = this.props;

    const listPosts = allPosts.map(post => {
      return (
        <Post
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        />
            )
    })

    console.log(listPosts)
      return (
        <div>
          {listPosts}
          <PostForm
          handleSubmit = {handleSubmit}
          handleChange = {handleChange}
          postBody = {postBody}
          postTitle = {postTitle}
          />
        </div>
            );
          }
}

export default Feed;
