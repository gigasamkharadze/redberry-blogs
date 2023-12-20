export default function FilterOption({ category }) {
  return (
    <div 
    className="px-[30px] py-[8px] whitespace-nowrap rounded-[30px] cursor-pointer"
    style={{color: category.text_color,backgroundColor: category.background_color}}>
        <p className="font-semibold">{category.title}</p>
    </div>
  )
}