import React from 'react'
import ApiPost from './ApiPost'

const Post = () => {

  const postApi = () => {
      const result = ApiPost('https://jsonplaceholder.typicode.com/posts')
      console.log(result);
  }

  return (
    <div>
        <button onClick={postApi}>POST</button>
    </div>
  )
}

export default Post