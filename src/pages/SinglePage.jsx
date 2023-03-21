import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { useAuth } from '../hook/useAuth'

const SinglePage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  const { signOut } = useAuth()

  const clickSignOut = () => {
    signOut(() => navigate('/', { replace: true }))
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        console.log(res.data)
        setPost(res.data)
      })
      .catch(err =>
        console.log(err)
      )
  }, [id])

  return (
    <>
      <div>
        {post && (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )}
      </div>
      <button onClick={clickSignOut}>Log Out</button>
    </>
  )
}

export default SinglePage