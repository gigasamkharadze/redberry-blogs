import Calendar from "react-calendar"
import { validateDate } from "./validators/validateDate"

import { useEffect, useState } from "react"

export default function DateInput({ postDate, setPostDate, showCalendar, setShowCalendar}) {
    
    useEffect(() => {
        var dateValid = null;
        if (postDate) {
            dateValid = validateDate(postDate)
        }
        setValidInput(dateValid)
    }, [postDate])

    const [validInput, setValidInput] = useState(null)

    const handleChange = (date) => {
        setPostDate(date)
        setShowCalendar(false)

        const postDateInput = document.querySelector('.post-date')
        postDateInput.classList.remove('bg-white')

        const isValid = validateDate(date)
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
    <div 
    className="max-w-[400px] flex flex-col flex-grow">
        <label className="font-semibold text-sm" htmlFor="post-date">გამოქვეყნების თარიღი *</label>
        <div
        style={style}
        className="date-input post-date w-[400px] flex flex-row py-3 px-4 border 
                mt-2 gap-2 rounded-xl">
            <img src="/calendar.svg" alt="calendar icon" />
            <input
                id="post-date"
                name="post-date"
                type="text"
                readOnly
                className="cursor-pointer active:outline-none bg-inherit text-sm"
                value={new Date(postDate).toLocaleDateString()}
                onClick={() => setShowCalendar(true)}/>
            
            {showCalendar && (
                <div className="absolute left-0 top-6 z-10 border border-gray rounded-xl ">
                    <Calendar 
                    className="bg-primary p-4" 
                    onChange={handleChange} 
                    value={postDate} />
                </div>)}
        </div>
    </div>
  )
}