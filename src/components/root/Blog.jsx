import { createBrowserRouter, useNavigate } from 'react-router-dom';
export default function Blog({ blog }) {
  const navigate = useNavigate();
  return (
    <div>
      <img 
      src={blog.image} 
      alt="Image for the blog" 
      className="w-full h-[328px] object-cover rounded-xl mb-6"/>
      <p className="text-[#1A1A1F] text-base font-semibold mb-2">{blog.author}</p>
      <p className="text-xs text-darkGray mb-4">{blog.publish_date.split('-').join('.')}</p>
      <h3 className="text-[#1A1A1F] text-xl font-semibold mb-4">{blog.title}</h3>
      <div className="flex flex-row flex-wrap gap-2 mb-4">
        {blog.categories.map((category) => (
          <div 
          key={category.id}
          className="text-xs px-2.5 py-1.5 whitespace-nowrap rounded-[30px] line-clamp-1"
          style={{color: category.text_color, backgroundColor: category.background_color}}>
              <p>{category.title}</p>
          </div>
      ))}
      </div>
      <p className="text-base text-[#404049] mb-4 line-clamp-2">{blog.description}</p>
      <span 
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="flex gap-1 items-center cursor-pointer w-fit">
        <p className="text-purple font-semibold text-sm">სრულად ნახვა</p>
        <img src="/Arrow.svg" alt="arrow" />
      </span>
    </div>
  );
}
