import { useState, useEffect } from "react";

import Navbar from "../components/root/Navbar";
import Hero from "../components/root/Hero";
import Filter from "../components/root/Filter";
import BlogList from "../components/root/BlogList";
import SignInWindow from "../components/root/SignInWindow";

export default function root() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) return;
    fetch("https://api.blog.redberryinternship.ge/api/token")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://api.blog.redberryinternship.ge/api/blogs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.blog.redberryinternship.ge/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data);
      });
  }, []);

  return (
    <div className="App bg-primary">
      <div className="max-w-[1920px] mx-auto py-2">
        <Navbar setIsLoggingIn={setIsLoggingIn} isLoggedIn={isLoggedIn} />
        <Hero />
        {isLoggingIn && (
          <SignInWindow
            setIsLoggingIn={setIsLoggingIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        <Filter categories={categories} />
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}