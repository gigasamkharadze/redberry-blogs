export function invalidCategoryHandler(element) {
    element.classList.remove('border-green')
    element.classList.remove('bg-lightGreen')
    element.classList.add('border-red')
    element.classList.add('bg-lightRed')
}