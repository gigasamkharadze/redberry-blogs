export function handleLeftScroll(scrollContainer) {
    const leftArrow = document.querySelector(".left-arrow")
    const rightArrow = document.querySelector(".right-arrow")
    
    scrollContainer.scrollLeft -= 500;
    const canScrollLeft = scrollContainer.scrollLeft > 0;
    if (!canScrollLeft) {
        leftArrow.classList.remove('bg-purple')
        leftArrow.classList.add('bg-gray')
        leftArrow.classList.remove('cursor-pointer')
    }

    const canScrollRight = scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (canScrollRight) {
        rightArrow.classList.remove('bg-gray')
        rightArrow.classList.add('bg-purple')
        rightArrow.classList.add('cursor-pointer')
    }
}