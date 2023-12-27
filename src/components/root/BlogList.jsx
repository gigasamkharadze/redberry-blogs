import Blog from "./Blog";

export default function BlogList({ blogs }) {
  return (
    <div className="grid grid-cols-3 px-[76px] gap-x-8 gap-y-14 mt-[64px]">
        {blogs.length > 0 && blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
    </div>
  )
}