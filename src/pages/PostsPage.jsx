import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

import '../assets/css/PostsPage.css'

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
      .catch(err =>
        console.log(err)
      )
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (

        <div className="container">
          <Link key={post.id} to={`/posts/${post.id}`}>
            <div>{post.id} Title: {post.title}</div>
            <div>Body: {post.body}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostsPage