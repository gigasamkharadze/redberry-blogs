export function validInputHandler(e) {
    e.target.classList.remove('border-red')
    e.target.classList.remove('bg-lightRed')
    e.target.classList.add('border-green')
    e.target.classList.add('bg-lightGreen')
}