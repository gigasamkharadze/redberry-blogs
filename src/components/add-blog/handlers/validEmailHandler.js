export function handleValidEmail(element) {
    element.classList.remove('border-red')
    element.classList.remove('bg-lightRed')
    element.classList.add('border-green')
    element.classList.add('bg-lightGreen')
    document.querySelector('.email-warning').classList.add('hidden')
}
