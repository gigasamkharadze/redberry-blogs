export default function Category({ category, handleCategoryClick }) {

    console.log('category', category)

    const style = {
        backgroundColor: category.background_color,
        borderColor: category.text_color
    }

    return <div 
            key={category.id}
            className="flex flex-shrink-0 items-center rounded-[30px] py-2 px-3 gap-1"
            style={style}>
                <span className="text-xs text-white">{category.title}</span>
                <img 
                src="/add.svg" 
                alt="add" 
                className="cursor-pointer" 
                onClick={() => handleCategoryClick(category.id)}/>
             </div>
}