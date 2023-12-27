import AddBlogNavbar from "../components/add-blog/AddBlogNavbar"
import AddBlogForm from "../components/add-blog/AddBlogForm"

import { useState } from "react"
import SuccessMessage from "../components/add-blog/SuccessMessage"
import { createBrowserRouter, useNavigate } from 'react-router-dom';

export default function AddBlog() {

  const [ showSuccessMessage, setShowSuccessMessage ] = useState(true)

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
        <AddBlogNavbar />
        <div 
          onClick={() => navigate('/')}
          className="absolute left-20 top-32 w-11 aspect-square flex bg-gray rounded-3xl cursor-pointer">
              <img className="m-auto" src="/arrow-left.svg" alt="scroll left" />
        </div>
        {showSuccessMessage && <SuccessMessage setShowSuccessMessage={setShowSuccessMessage} />}
        <AddBlogForm setShowSuccessMessage={setShowSuccessMessage}/>
    </div>    
  )
}