import { useState, useEffect, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { useBlog } from "../context/BlogContext";
import { useCategory } from "../context/CategoryContext";

import Navbar from "../components/root/Navbar";
import Hero from "../components/root/Hero";
import Filter from "../components/root/Filter";
import BlogList from "../components/root/BlogList";
import SignInWindow from "../components/root/SignInWindow";

export default function root() {
  const { categories } = useCategory();
  const [ filterCategories, setFilterCategories ] = useState(localStorage.getItem('filterCategories') 
      ? JSON.parse(localStorage.getItem('filterCategories')) 
      : []);
  const [ isLoggingIn, setIsLoggingIn ] = useState(false);
  const { isLoggedIn, login, logout } = useAuth();
  const { blogs, setBlogs } = useBlog();

  const filteredBlogs = useMemo(() => {
    if (filterCategories.length === 0) return blogs;
    return blogs.filter((blog) =>{
      const blogCategories = blog.categories.map((category) => category.id);
      return blogCategories.some((blogCategory) =>
        filterCategories.includes(blogCategory)
      );}
    );
  }, [filterCategories, blogs]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) return;
    fetch("https://api.blog.redberryinternship.ge/api/token")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  }, []);

  return (
    <div className="App bg-primary">
      <div className="max-w-[1920px] mx-auto pb-10">
        <Navbar setIsLoggingIn={setIsLoggingIn} isLoggedIn={isLoggedIn} />
        <Hero isLoggingIn={isLoggingIn}/>
        {isLoggingIn && (
          <SignInWindow
            setIsLoggingIn={setIsLoggingIn}
            login={login}
          />
        )}
        <Filter 
        isLloggingIn={isLoggingIn}
        categories={categories} 
        filterCategories={filterCategories}
        setFilterCategories={setFilterCategories}/>
        <BlogList 
        isLloggingIn={isLoggingIn}
        blogs={filteredBlogs} />
      </div>
    </div>
  );
}
