import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'
import NotFoundPage from './pages/NotFoundPage'
import SinglePage from './pages/SinglePage'
import LoginPage from './pages/LoginPage'

import Layout from './components/Layout'

import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

import './App.css'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='posts/:id' element={
            <RequireAuth>
              <SinglePage />
            </RequireAuth>
          } />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
