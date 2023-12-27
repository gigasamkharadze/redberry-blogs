import { useEffect } from "react"
import FilterOption from "./FilterOption"

export default function Filter({ categories, filterCategories ,setFilterCategories }) {

  // scroll with mouse wheel for filter options of categories
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container')
    scrollContainer.addEventListener('wheel', function(e) {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY * 0.5;
    }, { passive: false });
  }, [])

  return (
    <div className="scroll-container flex justify-between gap-10 mx-[378px] overflow-x-scroll scrollbar-hide">
      {categories.length > 0 && categories.map(category => {
        return <FilterOption 
          key={category.id} 
          category={category}
          setFilterCategories={setFilterCategories}
          filterCategories={filterCategories}
          />
      })}
    </div>
  )
}