import { validateLength } from './validators/validateLength.js'

import { useEffect, useState } from 'react'

export default function TitleInput({ title, setTitle }) {

    useEffect(() => {
        var titleValid = null;
        if (title && title.length > 0) {
            titleValid = validateLength(title, 2)
        }
        setValidInput(titleValid)
    }, [title])
    
    handleTitleChange(title)
    const [validInput, setValidInput] = useState(null)

    const handleBlur = (e) => {
        const isValid = validateLength(e.target.value, 2)
        if (isValid) setValidInput(true)
        else setValidInput(false)
    }

    const handleChange = (e) => {
        handleTitleChange(e.target.value)
        setTitle(e.target.value)
    }

    function handleTitleChange(value){
        if (!value) return
        const min2Symbols = document.querySelector('.title-min-2-symbol')
        if (!min2Symbols) return
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

    if (validInput) {
        style.borderColor = '#10B981'
        style.backgroundColor = '#ECFDF5'
    }
    else if (validInput === false) {
        style.borderColor = '#EF4444'
        style.backgroundColor = '#FEF2F2'
    }


  return (
    <div className="flex flex-col flex-grow">
        <label className="font-semibold text-sm" htmlFor="title">სათაური *</label>
        <input
            style={style}
            className="title-input my-[8px] px-[16px] py-[12px] h-[44px] w-[384] rounded-[12px] text-sm
            border border-gray focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
            type="text" 
            name="title" 
            id="title" 
            placeholder="შეიყვანეთ სათაური"
            value={title}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}/>

        <span className="title-min-2-symbol text-xs text-darkGray">მინიმუმ 2 სიმბოლო</span>
     </div>
  )
}