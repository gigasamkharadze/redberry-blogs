import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filter from './components/Filter'
import BlogList from './components/BlogList'


function App() {
  
  const [blogs, setBlogs] = useState([])
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) return
      fetch('https://api.blog.redberryinternship.ge/api/token')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token)        
      })
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('https://api.blog.redberryinternship.ge/api/blogs', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setBlogs(data.data)
    })
  }, [])

  useEffect(() => {
    fetch('https://api.blog.redberryinternship.ge/api/categories')
    .then(res => res.json())
    .then(data => {
      setCategories(data.data)
    })
  }, [])
    
  return (
      <div className="App bg-primary">
        <div className="max-w-[1920px] mx-auto border py-2">
          <Navbar />
          <Hero />
          <Filter categories={categories}/>
          <BlogList blogs={blogs} />
        </div>
      </div>
  )
}

export default App
