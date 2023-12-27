import { validateEmail } from "./validators/validateEmail"
import { handleValidEmail } from "./handlers/validEmailHandler"
import { handleInvalidEmail } from "./handlers/invalidEmailHandler"

export default function EmailInput({ setEmail}) {

    const handleBlur = (e) => {
        const isValid = validateEmail(e.target.value)
        const emailInput = document.querySelector('.email-input')
        emailInput.classList.remove('bg-white')
        if (isValid) handleValidEmail(emailInput)
        else handleInvalidEmail(emailInput)
    }

    return (
    <div className="flex flex-col w-1/2 mb-[40px]">
        <label className="font-semibold text-sm" htmlFor="email">ელ-ფოსტა</label>
        <input 
            className="email-input my-[8px] px-[16px] py-[12px] h-[44px] w-[384px] rounded-[12px] text-sm
                border border-gray focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
            type="email" 
            name="email" 
            id="email"
            placeholder="Example@redberry.com"
            onChange={(e) =>{setEmail(e.target.value)}}
            onBlur={(e) => handleBlur(e) }/>    
                <span className="email-warning hidden text-xs text-red flex gap-2">
                    <img 
                    className="info-circle" 
                    src="/info-circle.svg" 
                    alt="info circle" /> მეილი უნდა მთავრდებოდეს redberry@.ge-ით</span>
            </div>
  )
}