import Blog from "./Blog";

export default function BlogList({ blogs, isLloggingIn }) {
  const style = {
    opacity: isLloggingIn ? 0.5 : 1,
  }
  return (
    <div 
    style={style}
    className="grid grid-cols-3 px-[76px] gap-x-8 gap-y-14 mt-[64px]">
        {blogs.length > 0 && blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
    </div>
  )
}