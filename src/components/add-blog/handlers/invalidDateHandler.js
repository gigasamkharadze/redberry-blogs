export function invalidDateHandler(e){
    e.classList.remove('border-green')
    e.classList.remove('bg-lightGreen')
    e.classList.add('border-red')
    e.classList.add('bg-lightRed')
}