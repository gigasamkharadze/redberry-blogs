import FilterOption from "./FilterOption"

export default function Blog({ blog }) {
  return (
    <div>
        <img src="" alt="" />
        <p>{blog.author}</p>
        <p>{blog.publish_date}</p>
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <a href="">სრულად ნახვა</a>
    </div>
  )
}