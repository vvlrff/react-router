import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'

import HomePage from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { postsLoader, PostsPage } from './pages/PostsPage'
import NotFoundPage from './pages/NotFoundPage'
import {postLoader, SinglePage} from './pages/SinglePage'
import LoginPage from './pages/LoginPage'

import Layout from './components/Layout'

import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='about/*' element={<AboutPage />}>
      <Route path='contacts' element={<p>Our contacts</p>} />
      <Route path='team' element={<p>Our team</p>} />
    </Route>
    <Route path='posts' element={<PostsPage />} loader={postsLoader} />
    <Route path='posts/:id' element={
      <RequireAuth>
        <SinglePage />
      </RequireAuth>
    } loader={postLoader} />
    <Route path='login' element={<LoginPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
))

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
