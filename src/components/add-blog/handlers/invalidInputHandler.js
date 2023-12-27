export function invalidInputHandler(e){
    e.target.classList.remove('border-green')
    e.target.classList.remove('bg-lightGreen')
    e.target.classList.add('border-red')
    e.target.classList.add('bg-lightRed')
}