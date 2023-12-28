import { validateLength } from './validators/validateLength.js'
import { validateGeorgianLetters } from './validators/validateGeorgianLetters.js'
import { validateNumberOfWords } from './validators/validateNumberOfWords.js'

import { useEffect, useState } from 'react'

export default function AuthorInput({ author, setAuthor}) {

    useEffect(() => {
        var authorValid = null;
        if (author.length === 0) {
            authorValid = null
        }
        else if (author && author.length > 0) {
            authorValid = validateLength(author, 4) && 
                    validateGeorgianLetters(author) && 
                    validateNumberOfWords(author, 2)
        }
        validateChange(author)
        setValidInput(authorValid)
    }, [author])
    
    const [validInput, setValidInput] = useState(null)
    const handleChange = (e) => {
        validateChange(e.target.value)
        setAuthor(e.target.value)
    }

    function validateChange(value){
        if (!value) return
        const min4Symbols = document.querySelector('.author-min-4-symbol')
        const min2Words = document.querySelector('.author-min-2-word')
        const georgianLetters = document.querySelector('.author-georgian-letters')

        if (!min4Symbols || !min2Words || !georgianLetters) return
        
        if (validateLength(value, 4)) {
            min4Symbols.classList.remove('text-red')
            min4Symbols.classList.add('text-green')
        }else {
            min4Symbols.classList.remove('text-green')
            min4Symbols.classList.add('text-red')
        }

        if (validateNumberOfWords(value, 2)) {
            min2Words.classList.remove('text-red')
            min2Words.classList.add('text-green')
        }
        else {
            min2Words.classList.remove('text-green')
            min2Words.classList.add('text-red')
        }

        if (validateGeorgianLetters(value)) {
            georgianLetters.classList.remove('text-red')
            georgianLetters.classList.add('text-green')
        }
        else {
            georgianLetters.classList.remove('text-green')
            georgianLetters.classList.add('text-red')
        }
    }

    const handleBlur = (e) => {
        const isValid = validateLength(e.target.value, 4) && 
                    validateGeorgianLetters(e.target.value) && 
                    validateNumberOfWords(e.target.value, 2)
        if (isValid) setValidInput(true)
        else setValidInput(false)
    }

    const style = {
        borderColor: '#E4E3EB',
        backgroundColor: '#FFFFFF',
    }

    if (validInput === true) {
        style.borderColor = '#10B981'
        style.backgroundColor = '#ECFDF5'
    }
    else if (validInput === false) {
        style.borderColor = '#EF4444'
        style.backgroundColor = '#FEF2F2'
    }


  return (
    <div className="flex flex-col flex-grow">
        <label className="font-semibold text-sm" htmlFor="author">ავტორი *</label>
        <input 
            style={style}
            className="author-input my-[8px] px-[16px] py-[12px] h-[44px] w-[384] rounded-[12px] text-sm border 
            border-gray focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
            type="text" 
            name="author" 
            id="author" 
            autoComplete='off'
            placeholder="შეიყვანეთ ავტორი"
            value={author}
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