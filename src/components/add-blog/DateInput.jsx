import Calendar from "react-calendar"
import { validateDate } from "./validators/validateDate"
import { validDateHandler } from "./handlers/validDateHandler"
import { invalidDateHandler } from "./handlers/invalidDateHandler"

export default function DateInput({ postDate, setPostDate, showCalendar, setShowCalendar}) {
    
    const handleChange = (date) => {
        setPostDate(date)
        setShowCalendar(false)

        const postDateInput = document.querySelector('.post-date')
        postDateInput.classList.remove('bg-white')

        const isValid = validateDate(date)
        if (isValid) validDateHandler(postDateInput)
        else invalidDateHandler(postDateInput)
    }

    
    return (
    <div className="max-w-[300px] flex flex-col flex-grow cursor-pointer">
        <label className="font-semibold text-sm" htmlFor="post-date">გამოქვეყნების თარიღი *</label>
        <div className="post-date w-[288px] flex flex-row py-3 px-4 border border-gray 
                bg-white mt-2 gap-2 rounded-xl">
            <img src="/calendar.svg" alt="calendar icon" />
            <input
                type="text"
                readOnly
                className="cursor-pointer active:outline-none bg-inherit text-sm"
                value={postDate.toLocaleDateString()}
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