export default function CategoryDropDown({category, selectedCategories, setSelectedCategories}) {
    
    const style = {
        backgroundColor: category.background_color,
        color: category.text_color
    }
        
    const isSelected = selectedCategories.includes(category.id)
    if (isSelected) {
        style.opacity = 1
    }else{
        style.opacity = 0.7
    }

    const handleClickedCategory = (id) => {
        const newSelectedCategories = [...selectedCategories]
        
        if (selectedCategories.includes(id)) {
            newSelectedCategories.splice(selectedCategories.indexOf(id), 1)
        } else {
            newSelectedCategories.push(id)
        }    
        setSelectedCategories(newSelectedCategories)
    }
  
    return (
    <span 
        onClick={() => handleClickedCategory(category.id)}
        className='text-xs w-max py-2 px-3 rounded-[30px] cursor-pointer'
        style={style}
        >{category.title}
    </span>
  )
}