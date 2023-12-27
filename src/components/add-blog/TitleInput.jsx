import { validInputHandler } from './handlers/validInputHandler.js'
import { invalidInputHandler } from './handlers/invalidInputHandler.js'
import { validateLength } from './validators/validateLength.js'

export default function TitleInput({ title, setTitle }) {

    const handleBlur = (e) => {
        const isValid = validateLength(e.target.value, 2)
        if (isValid) validInputHandler(e)
        else invalidInputHandler(e)
    }

    const handleChange = (e) => {

        if (validateLength(e.target.value, 2)) {
            const min2Symbols = document.querySelector('.title-min-2-symbol')
            min2Symbols.classList.remove('text-red')
            min2Symbols.classList.add('text-green')
        }else {
            const min2Symbols = document.querySelector('.title-min-2-symbol')
            min2Symbols.classList.remove('text-green')
            min2Symbols.classList.add('text-red')
        }

        setTitle(e.target.value)
    }

  return (
    <div className="flex flex-col flex-grow">
        <label className="font-semibold text-sm" htmlFor="title">სათაური *</label>
        <input
            className="my-[8px] px-[16px] py-[12px] h-[44px] w-[288px] rounded-[12px] text-sm
            border border-gray focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
            type="text" 
            name="title" 
            id="title" 
            placeholder="შეიყვანეთ სათაური"
            onFocus={(e) => validInputHandler(e)}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}/>

        <span className="title-min-2-symbol text-xs text-darkGray">მინიმუმ 2 სიმბოლო</span>
     </div>
  )
}