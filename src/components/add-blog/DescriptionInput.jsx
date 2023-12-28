import { validateLength } from './validators/validateLength.js'
import { useEffect, useState } from "react"

export default function DescriptionInput({ description, setDescription}) {

    useEffect(() => {
        var descriptionValid = null;
        if (description) {
            descriptionValid = validateLength(description, 2)
        }
        setValidInput(descriptionValid)
        handleDescriptionInputChange(description)
    }, [description])

    const [validInput, setValidInput] = useState(null)

    const handleBlur = (e) => {
        const isValid = validateLength(e.target.value, 2)
        if (isValid) setValidInput(true)
        else setValidInput(false)   
    }

    const handleChange = (e) => {
        handleDescriptionInputChange(e.target.value)
        setDescription(e.target.value)
    }

    function handleDescriptionInputChange(value){
        if (value === '') return
        const min2Symbols = document.querySelector('.description-min-2')
        if (validateLength(value, 2)) {
            min2Symbols.classList.remove('text-red')
            min2Symbols.classList.add('text-green')
        }else {
            min2Symbols.classList.remove('text-green')
            min2Symbols.classList.add('text-red')
        }
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
    <div className="flex flex-col mb-[24px]">
        <label className="font-semibold text-sm" htmlFor="description">აღწერა *</label>
        <textarea 
            className="description-input my-[8px] text-sm px-[16px] py-[12px] h-[88px] w-[800px] rounded-[12px] scrollbar-hide
                border border-gray focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
            name="description" 
            id="description" 
            placeholder="შეიყვანეთ აღწერა" 
            cols="30" 
            rows="10"
            value={description}
            autoComplete='off'
            style={style}
            onBlur={(e) => handleBlur(e)}                    
            onChange={(e) => handleChange(e)}></textarea>   
        <span className="description-min-2 text-xs text-darkGray">მინიმუმ 2 სიმბოლო</span>
    </div>
  )
}