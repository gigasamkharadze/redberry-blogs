import { validInputHandler } from './handlers/validInputHandler.js'
import { invalidInputHandler } from './handlers/invalidInputHandler.js'
import { validateLength } from './validators/validateLength.js'
import { validateGeorgianLetters } from './validators/validateGeorgianLetters.js'
import { validateNumberOfWords } from './validators/validateNumberOfWords.js'

export default function AuthorInput({ author, setAuthor}) {

    const handleChange = (e) => {
        const min4Symbols = document.querySelector('.author-min-4-symbol')
        const min2Words = document.querySelector('.author-min-2-word')
        const georgianLetters = document.querySelector('.author-georgian-letters')
        
        if (validateLength(e.target.value, 4)) {
            min4Symbols.classList.remove('text-red')
            min4Symbols.classList.add('text-green')
        }else {
            min4Symbols.classList.remove('text-green')
            min4Symbols.classList.add('text-red')
        }

        if (validateNumberOfWords(e.target.value, 2)) {
            min2Words.classList.remove('text-red')
            min2Words.classList.add('text-green')
        }
        else {
            min2Words.classList.remove('text-green')
            min2Words.classList.add('text-red')
        }

        if (validateGeorgianLetters(e.target.value)) {
            georgianLetters.classList.remove('text-red')
            georgianLetters.classList.add('text-green')
        }
        else {
            georgianLetters.classList.remove('text-green')
            georgianLetters.classList.add('text-red')
        }
        setAuthor(e.target.value)
    }

    const handleBlur = (e) => {
        const isValid = validateLength(e.target.value, 4) && 
                    validateGeorgianLetters(e.target.value) && 
                    validateNumberOfWords(e.target.value, 2)
        if (isValid) validInputHandler(e)
        else invalidInputHandler(e)
    }

  return (
    <div className="flex flex-col flex-grow">
        <label className="font-semibold text-sm" htmlFor="author">ავტორი *</label>
        <input 
            className="my-[8px] px-[16px] py-[12px] h-[44px] w-[384] rounded-[12px] text-sm border 
            border-gray focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
            type="text" 
            name="author" 
            id="author" 
            placeholder="შეიყვანეთ ავტორი"
            value={author}
            onFocus={(e) => {validInputHandler(e)}}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}/>
        <ul className="list-disc pl-[20px]">
            <li className="author-min-4-symbol text-xs text-darkGray">მინიმუმ 4 სიმბოლო</li>
            <li className="author-min-2-word text-xs text-darkGray">მინიმუმ 2 სიტყვა</li>
            <li className="author-georgian-letters text-xs text-darkGray">მხოლოდ ქართული სიმბოლოები</li>
        </ul>                
    </div>
  )
}