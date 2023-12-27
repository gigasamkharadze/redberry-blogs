export function handleRightScroll(scrollContainer) {
    const leftArrow = document.querySelector(".left-arrow")
    const rightArrow = document.querySelector(".right-arrow")
    
    scrollContainer.scrollBy({
        left: 500,
        behavior: 'smooth'
    });
    const canScrollRight = scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (!canScrollRight) {
        rightArrow.classList.remove('bg-purple')
        rightArrow.classList.add('bg-gray')
        rightArrow.classList.remove('cursor-pointer')
    }

    const canScrollLeft = scrollContainer.scrollLeft > 0;
    if (canScrollLeft) {
        leftArrow.classList.remove('bg-gray')
        leftArrow.classList.add('bg-purple')
        leftArrow.classList.remove('cursor-default')
        leftArrow.classList.add('cursor-pointer')
    }
}