import React from 'react'
import "./App.css"

export const PostForm = props => {

  const {
          handleSubmit,
          handleChange,
          postTitle,
          postBody
        } = props;

  return (
    <>
    <form onChange = {handleChange}
          onSubmit ={handleSubmit}>

        <label htmlFor= "title">Title</label>
        <input
          type="text"
          placeholder= "Add Title"
          name="postTitle"
          value={postTitle}
          id="title"
          />

        <label htmlFor= "body">Body</label>
        <input
          type="text"
          placeholder = "Write your post"
          name = "postBody"
          value={postBody}
          id="body"
        />
        <input type="submit"/>


    </form>
    </>

  )
}
