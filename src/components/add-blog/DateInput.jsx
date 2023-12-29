import Calendar from "react-calendar"

export default function DateInput({ postDate, setPostDate, showCalendar, setShowCalendar}) {
    
    const handleChange = (date) => {
        setPostDate(date)
        setShowCalendar(false)
    }
    
    return (
    <div 
    className="max-w-[400px] flex flex-col flex-grow">
        <label className="font-semibold text-sm" htmlFor="post-date">გამოქვეყნების თარიღი *</label>
        <div
        className="date-input post-date w-[400px] flex flex-row py-3 px-4 border 
                mt-2 gap-2 rounded-xl border-gray bg-white">
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