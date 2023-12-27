import { validInputHandler } from './handlers/validInputHandler.js'
import { invalidInputHandler } from './handlers/invalidInputHandler.js'
import { validateLength } from './validators/validateLength.js'

export default function DescriptionInput({ description, setDescription}) {

    const handleBlur = (e) => {
        const isValid = validateLength(e.target.value, 2)
        if (isValid) validInputHandler(e)
        else invalidInputHandler(e)
    }

    const handleChange = (e) => {
        const min2Symbols = document.querySelector('.description-min-2')
        if (validateLength(e.target.value, 2)) {
            min2Symbols.classList.remove('text-red')
            min2Symbols.classList.add('text-green')
        }else {
            min2Symbols.classList.remove('text-green')
            min2Symbols.classList.add('text-red')
        }
        setDescription(e.target.value)
    }

  return (
    <div className="flex flex-col mb-[24px]">
        <label className="font-semibold text-sm" htmlFor="description">აღწერა *</label>
        <textarea 
            className="my-[8px] text-sm px-[16px] py-[12px] h-[88px] w-[800px] rounded-[12px] 
                border border-gray focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
            name="description" 
            id="description" 
            placeholder="შეიყვანეთ აღწერა" 
            cols="30" 
            rows="10"
            onFocus={(e) => validInputHandler(e)}
            onBlur={(e) => handleBlur(e)}                    
            onChange={(e) => handleChange(e)}></textarea>   
        <span className="description-min-2 text-xs text-darkGray">მინიმუმ 2 სიმბოლო</span>
    </div>
  )
}