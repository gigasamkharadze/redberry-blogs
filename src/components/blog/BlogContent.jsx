export default function BlogContent({ blog }) {
    return (
    <div className="max-w-[720px] mt-10">
        <img 
            src={blog.image} 
            alt="image for the blog" 
            className="w-[720px] h-[360px] object-cover rounded-[8px] mb-10"
        />
        <p className="text-[#1A1A1F] text-base font-semibold mb-2">{blog.author}</p>    
        <div className="flex text-center gap-1 text-xs text-darkGray mb-6">
            <p>{blog.publish_date.split('-').join('.')}</p>
            <span className="font-bold">.</span>
            <p>{blog.email}</p>
        </div>
        <h3 className="text-[#1A1A1F] text-[32px] font-semibold mb-6">{blog.title}</h3>
        <div className="flex gap-2 flex-wrap">
            {blog.categories.map((category) => (
                <div 
                    key={category.id}
                    className="text-xs px-2.5 py-1.5 whitespace-nowrap rounded-[30px] line-clamp-1"
                    style={{color: category.text_color, backgroundColor: category.background_color}}>
                    <p>{category.title}</p>
                </div>
            ))}
        </div>
        <p className="text-base text-[#404049] mt-10 mb-24">{blog.description}</p>
    </div>
  )
}