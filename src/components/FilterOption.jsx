export default function FilterOption({ category }) {
  // console.log(`category ${category.title} color is ${category.text_color} and background is ${category.background_color}`)

  return (
    <div 
    className="px-[30px] py-[8px] whitespace-nowrap rounded-[30px] cursor-pointer"
    style={{color: category.text_color,backgroundColor: category.background_color}}>
        <p className="font-semibold">{category.title}</p>
    </div>
  )
}