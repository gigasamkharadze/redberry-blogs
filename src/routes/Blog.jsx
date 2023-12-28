import { useParams } from "react-router-dom"
import { useState, useEffect, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { useBlog } from "../context/BlogContext";
import { createBrowserRouter, useNavigate } from 'react-router-dom';

import Navbar from "../components/blog/Navbar";
import BlogContent from "../components/blog/BlogContent";
import SimilarBlogsContainer from "../components/blog/SimilarBlogsContainer";

export default function Blog() {
    const { id } = useParams()
    const [ blog, setBlog] = useState({})
    const { isLoggedIn, login, logout } = useAuth();
    const [ isLoggingIn, setIsLoggingIn] = useState(false);
    const { blogs, setBlogs } = useBlog();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch(`https://api.blog.redberryinternship.ge/api/blogs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setBlog(data)
        })
    }, [id])

    const similarBlogs = useMemo(() => {
        if (Object.keys(blog).length === 0) return []
        const blogCategories = blog.categories.map(category => category.id)
        const similarBlogs = blogs.filter(blog => {
            const otherBlogCategories = blog.categories.map(category => category.id)
            const commonCategories = blogCategories.filter(category => otherBlogCategories.includes(category))
            if (commonCategories.length > 0) return true
        })
        const filteredSimilarBlogs = similarBlogs.filter(similarBlog => similarBlog.id !== blog.id)
        return filteredSimilarBlogs
    }, [blogs, blog])

    return (
    <div className="flex flex-col items-center w-full pb-10">
        <Navbar 
            setIsLoggingIn={setIsLoggingIn}
            isLoggedIn={isLoggedIn} 
            login={login}
        />

        <div 
        onClick={() => navigate('/')}
        className="absolute left-20 top-32 w-11 aspect-square flex bg-gray rounded-3xl cursor-pointer">
            <img className="m-auto" src="/arrow-left.svg" alt="scroll left" />
        </div>
        {isLoggingIn && <div>sign in</div>}
        {Object.keys(blog).length !== 0 && <BlogContent blog={blog} />}
        <SimilarBlogsContainer blogs={similarBlogs}/>
    </div> 
  )
}