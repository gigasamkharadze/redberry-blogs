import { validCategoryHandler } from "./handlers/validCategoryHandler"
import { invalidCategoryHandler } from "./handlers/invalidCategoryHandler"

import Category from "./Category"
import CategoryDropDown from "./CategoryDropDown"

export default function CategoryInput({ categories, selectedCategories, setSelectedCategories }) {
    
    const handleCategoryClick = (id) => {
        setSelectedCategories(selectedCategories.filter((categoryId) => categoryId !== id))
        
        const categoryInput = document.querySelector('.category-filter-container')
        categoryInput.classList.remove('bg-white')
        
        if (selectedCategories.length === 1) invalidCategoryHandler(categoryInput)
        else validCategoryHandler(categoryInput)
    }
  
    const handleArrowClick = () => {
        document.querySelector('.arrow').classList.toggle('rotate-180')
        document.querySelector('.categories-select').classList.toggle('hidden')    
    }

    return (
    <div className="relative flex flex-col flex-grow z-0">
        <label className="font-semibold text-sm" htmlFor="category">კატეგორია *</label>
            <div className="category-filter-container w-[288px] bg-white h-[44px] gap-2 p-1.5 flex rounded-lg border border-gray mt-[8px]">
                <div className="flex overflow-scroll scrollbar-hide gap-2"> 
                    {selectedCategories.map((categoryId) => (
                        <Category 
                            key={categoryId} 
                            category={categories.find((category) => category.id === categoryId)} 
                            handleCategoryClick={handleCategoryClick} />
                    )
                    )}
                </div>
                <img 
                    onClick={() => handleArrowClick()}
                    src="/arrow-down.svg" 
                    alt="arrow down" 
                    className="arrow ml-auto cursor-pointer"/>
                <div 
                    className="categories-select absolute left-0 top-[72px] w-[288px] max-h-[140px] bg-white rounded-lg border border-gray
                        p-2.5 flex flex-col gap-2 overflow-scroll scrollbar-hide hidden">    
                        {categories.map((category) => {
                            return <CategoryDropDown 
                            key={category.id}
                            category={category} 
                            selectedCategories={selectedCategories} 
                            setSelectedCategories={setSelectedCategories} />
                        })}
                </div>
            </div>
    </div>    
  )
}