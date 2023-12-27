export default function FilterOption({ category, setFilterCategories, filterCategories }) {
  
  const handleClick = (e) => {
    if (filterCategories.includes(category.id)) {
      setFilterCategories(filterCategories.filter((item) => item !== category.id))
    } else {
      setFilterCategories([...filterCategories, category.id])
    }
    const localStorageFilterCategories = JSON.parse(localStorage.getItem('filterCategories'))
    if (!localStorageFilterCategories) {
      localStorage.setItem('filterCategories', JSON.stringify([category.id]))
    } else {
      const newFilterCategories = localStorageFilterCategories.includes(category.id)
        ? localStorageFilterCategories.filter((item) => item !== category.id)
        : [...localStorageFilterCategories, category.id]
      localStorage.setItem('filterCategories', JSON.stringify(newFilterCategories))
    }
  }

  const isActive = filterCategories.includes(category.id)
  
  return (
    <div 
    onClick={(e) => handleClick(e)}
    className="text-xs px-4 py-2 whitespace-nowrap rounded-[30px] cursor-pointer 
    border-2 border-transparent hover:opacity-70  transition-all duration-300 ease-in-out"
    style={{
      color: category.text_color, 
      backgroundColor: category.background_color,
      borderColor: isActive ? 'black' : "transparent"
}}>
        <p className="font-semibold">{category.title}</p>
    </div>
  )
}