import AddBlogNavbar from "../components/add-blog/AddBlogNavbar"
import AddBlogForm from "../components/add-blog/AddBlogForm"

export default function AddBlog() {
  return (
    <div className="flex flex-col items-center">
        <AddBlogNavbar />
        <AddBlogForm />
    </div>    
  )
}