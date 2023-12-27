import { invalidCategoryHandler } from "./handlers/invalidCategoryHandler"
import { validCategoryHandler } from "./handlers/validCategoryHandler"

export default function CategoryDropDown({ category, selectedCategories, setSelectedCategories}) {
    
    const style = {
        backgroundColor: category.background_color,
        borderColor: category.text_color,
    }
    
    const isSelected = selectedCategories.includes(category.id)
    if (isSelected) {
        style.border = '1px solid black'
    }else{
        style.border = '1px solid transparent'
    }

    const handleClickedCategory = (id) => {
        const newSelectedCategories = [...selectedCategories]
        
        if (selectedCategories.includes(id)) {
            newSelectedCategories.splice(selectedCategories.indexOf(id), 1)
        } else {
            newSelectedCategories.push(id)
        }

        const categoryInput = document.querySelector('.category-filter-container')
        categoryInput.classList.remove('bg-white')
        
        if (newSelectedCategories.length === 0) invalidCategoryHandler(categoryInput)
        else validCategoryHandler(categoryInput)
    
    setSelectedCategories(newSelectedCategories)
    }
  
    return (
    <span 
        onClick={() => handleClickedCategory(category.id)}
        className='text-xs text-center  py-2 pl-3 rounded-[30px] gap-2 cursor-pointer'
        style={style}
        >{category.title}
    </span>
  )
}