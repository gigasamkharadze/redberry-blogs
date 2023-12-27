import { validateDate } from "./validators/validateDate"
import { validateEmail } from "./validators/validateEmail"
import { validateLength } from "./validators/validateLength"
import { validateNumberOfWords } from "./validators/validateNumberOfWords"
import { validateGeorgianLetters } from "./validators/validateGeorgianLetters"

export default function SubmitButton({photo, author, title, description, postDate, categories, email}) {
  
    const isPhotoValid = photo !== null
    const isAuthorValid = validateLength(author, 2) &&
        validateNumberOfWords(author, 2) &&
        validateGeorgianLetters(author)
    const isTitleValid = validateLength(title, 2)
    const isDescriptionValid = validateLength(description, 2)
    const isPostDateValid = validateDate(postDate)
    const isCategoryValid = categories.length > 0
    const isEmailValid = validateEmail(email)
    
    const isFormValid = isPhotoValid && isAuthorValid && isTitleValid && isDescriptionValid && isPostDateValid && isCategoryValid && isEmailValid
    const style = {
        backgroundColor: isFormValid ? '#5E50F9' : '#BDBDBD',
        cursor: isFormValid ? 'pointer' : 'default'
    }

    return (
    <button 
        className="w-[288px] block ml-auto py-[10px] bg-gray text-white rounded-[8px]
            font-semibold text-sm"
        type="submit"
        style={style}>გამოქვეყნება</button> 
  )
}