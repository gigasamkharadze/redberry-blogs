export function cleanUpValidations(){
    
    // clean author input
    const min4Symbols = document.querySelector('.author-min-4-symbol')
    const min2Words = document.querySelector('.author-min-2-word')
    const georgianLetters = document.querySelector('.author-georgian-letters')
    const authorInput = document.querySelectorAll('.author-input')[0]

    min4Symbols.classList.remove('text-green')
    min2Words.classList.remove('text-green')
    georgianLetters.classList.remove('text-green')
    authorInput.classList.remove('border-green')
    authorInput.classList.remove('bg-lightGreen')

    // clean title input
    const titleMin2Symbols = document.querySelector('.title-min-2-symbol')
    titleMin2Symbols.classList.remove('text-green')
    const titleInput = document.querySelectorAll('.title-input')[0]
    titleInput.classList.remove('border-green') 

    // clean content input
    const descriptionMin2Symbols = document.querySelector('.description-min-2')
    descriptionMin2Symbols.classList.remove('text-green')
    const descriptionInput = document.querySelectorAll('.description-input')[0]
    descriptionInput.classList.remove('border-green') 

    // date input
    const dateInput = document.querySelectorAll('.date-input')[0]
    dateInput.classList.remove('border-green')

    // category input
    const categoryInput = document.querySelectorAll('.category-filter-container')[0]
    categoryInput.classList.remove('border-green')

    // email input
    const emailInput = document.querySelectorAll('.email-input')[0]
    emailInput.classList.remove('border-green')
}

