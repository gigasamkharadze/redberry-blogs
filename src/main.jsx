import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx';
import { BlogProvider } from './context/BlogContext.jsx';
import Root from './routes/root.jsx';
import AddBlog from './routes/AddBlog.jsx';
import Blog from './routes/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Not Found</h1>,
  },
  {
    path: "/add-blog",
    element: <AddBlog />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </BlogProvider>
);