import { validateDate } from "./validators/validateDate"
import { validateEmail } from "./validators/validateEmail"
import { validateLength } from "./validators/validateLength"
import { validateNumberOfWords } from "./validators/validateNumberOfWords"
import { validateGeorgianLetters } from "./validators/validateGeorgianLetters"

import { useEffect } from "react"

export default function SubmitButton({photo, author, title, description, postDate, categories, email}) {
  
    useEffect(() => {
        const button = document.querySelector('.submit-form-button')
        button.addEventListener('click', () => {
            button.style.pointerEvents = 'none'
            setTimeout(() => {
                button.style.pointerEvents = 'auto'
            }, 1000)
        }
        )
    }, [])


    const isPhotoValid = photo !== null && photo !== ''
    const isAuthorValid = validateLength(author, 2) &&
        validateNumberOfWords(author, 2) &&
        validateGeorgianLetters(author)
    const isTitleValid = validateLength(title, 2)
    const isDescriptionValid = validateLength(description, 2)
    const isCategoryValid = categories.length > 0
    const isEmailValid = validateEmail(email)
    
    const isFormValid = isPhotoValid && isAuthorValid && isTitleValid && isDescriptionValid && isCategoryValid && isEmailValid
    const style = {
        backgroundColor: isFormValid ? '#5E50F9' : '#BDBDBD',
        cursor: isFormValid ? 'pointer' : 'default',
        pointerEvents: isFormValid ? 'auto' : 'none',
    }

    return (
    <button 
        className="submit-form-button w-[288px] block ml-auto py-[10px] bg-gray text-white rounded-[8px]
            font-semibold text-sm"
        type="submit"
        style={style}>გამოქვეყნება</button> 
  )
}