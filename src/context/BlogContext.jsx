import React, { createContext, useContext, useEffect, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("https://api.blog.redberryinternship.ge/api/blogs", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then((res) => res.json())
        .then((data) => {
            const blogs = data.data;
            const filteredBlogs = blogs.filter((blog) => {
                const publishDate = new Date(blog.publish_date);
                const currentDate = new Date();
                return publishDate <= currentDate;
            });
            setBlogs(filteredBlogs);
        });
    }, []);
    
    return (
        <BlogContext.Provider value={{ blogs, setBlogs }}>
            {children}
        </BlogContext.Provider>
    );
}

export const useBlog = () => useContext(BlogContext);