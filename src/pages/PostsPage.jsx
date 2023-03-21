import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import axios from 'axios'

import '../assets/css/PostsPage.css'

const PostsPage = () => {
  const [posts, setPosts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const postQuery = searchParams.get('post') || ''

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    
    const query = form.search.value

    setSearchParams({post: query})
  }

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
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type='text' name="search" />
        <input type='submit' value='search' />

      </form>
      {posts.filter(
        post => post.title.includes(postQuery)
      ).map(post => (

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