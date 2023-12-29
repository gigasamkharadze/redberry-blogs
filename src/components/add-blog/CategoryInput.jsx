import Category from "./Category"
import CategoryDropDown from "./CategoryDropDown"

export default function CategoryInput({ categories, selectedCategories, setSelectedCategories }) {

    const handleCategoryClick = (id) => {
        setSelectedCategories(selectedCategories.filter((categoryId) => categoryId !== id))
    }

    const handleArrowClick = () => {
        document.querySelector('.arrow').classList.toggle('rotate-180')
        document.querySelector('.categories-select').classList.toggle('hidden')    
    }

    return (
    <div className="relative flex flex-col flex-grow z-0">
        <span className="font-semibold text-sm" htmlFor="category">კატეგორია *</span>
            <div 
            className="category-filter-container w-[384px] h-[44px] gap-2 p-1.5 flex bg-white border-gray rounded-lg border mt-[8px]">
                <div className="flex overflow-scroll scrollbar-hide gap-2"> 
                    {categories.length > 0 && setSelectedCategories.length > 0 && selectedCategories.map((categoryId) => (
                        <Category
                        key={categoryId} 
                        category={categories.find((category) => category.id == categoryId)} 
                        handleCategoryClick={handleCategoryClick} />
                    )
                )}
                {selectedCategories.length === 0 && 
                    <div className="flex items-center px-1">
                        <span className="text-xs text-darkGray">აირჩიეთ კატეგორია</span>
                    </div>}
                </div>
                <img 
                    onClick={() => handleArrowClick()}
                    src="/arrow-down.svg" 
                    alt="arrow down" 
                    className="arrow ml-auto cursor-pointer"/>
                <div 
                    className="categories-select absolute left-0 top-[72px] w-[384px] max-h-[140px] bg-white rounded-lg border border-gray
                        p-2.5 flex flex-wrap gap-2 overflow-scroll scrollbar-hide hidden">    
                        {categories.length > 0 && categories.map((category) => {
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