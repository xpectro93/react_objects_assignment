import React from "react";
import Post from './post';

class Feed extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
let { allPosts } = this.props;

const listPosts = allPosts.map(post => {
  return (
    <Post
    key={post.id}
    id={post.id}cd
    title={post.title}
    body={post.body}
    />
  )
})
console.log(listPosts)
return (
      <div>
        {listPosts}
      </div>
        );
      }
}

export default Feed;
