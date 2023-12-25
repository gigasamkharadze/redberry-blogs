import AddBlogNavbar from "../components/AddBlogNavbar"
import AddBlogForm from "../components/AddBlogForm"

export default function AddBlog() {
  return (
    <div className="flex flex-col items-center">
        <AddBlogNavbar />
        <AddBlogForm />
    </div>    
  )
}