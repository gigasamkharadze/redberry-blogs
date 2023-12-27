export function handleScroll(scrollContainer) {
    const leftArrow = document.querySelector(".left-arrow")
    const rightArrow = document.querySelector(".right-arrow")
    
    if (scrollContainer.scrollLeft === 0) {
        leftArrow.classList.remove('bg-purple')
        leftArrow.classList.add('bg-gray')
        leftArrow.classList.remove('cursor-pointer')
    }else {
        leftArrow.classList.remove('bg-gray')
        leftArrow.classList.add('bg-purple')
        leftArrow.classList.remove('cursor-default')
        leftArrow.classList.add('cursor-pointer')
    }

    if (scrollContainer.scrollLeft === scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        rightArrow.classList.remove('bg-purple')
        rightArrow.classList.add('bg-gray')
        rightArrow.classList.remove('cursor-pointer')
    }
    else {
        rightArrow.classList.remove('bg-gray')
        rightArrow.classList.add('bg-purple')
        rightArrow.classList.remove('cursor-pointer')
        rightArrow.classList.add('cursor-pointer')
    }
}