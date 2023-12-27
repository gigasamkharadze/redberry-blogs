export function handleInvalidEmail(element) {
    element.classList.remove('border-green')
    element.classList.remove('bg-lightGreen')
    element.classList.add('border-red')
    element.classList.add('bg-lightRed')
    document.querySelector('.email-warning').classList.remove('hidden')
}