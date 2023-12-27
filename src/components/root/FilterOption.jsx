export default function FilterOption({ category }) {
  return (
    <div 
    className="text-xs px-4 py-2 whitespace-nowrap rounded-[30px] cursor-pointer"
    style={{color: category.text_color, backgroundColor: category.background_color}}>
        <p className="font-semibold">{category.title}</p>
    </div>
  )
}