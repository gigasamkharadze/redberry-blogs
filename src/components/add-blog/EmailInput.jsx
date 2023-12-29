import { validateEmail } from "./validators/validateEmail"
import { useEffect, useState } from "react"

export default function EmailInput({ email, setEmail}) {

    useEffect(() => {
        var emailValid = null;
        if (email && email.length > 0) {
            emailValid = validateEmail(email)
        }
        setValidEmail(emailValid)
    }, [email])

    const [validEmail, setValidEmail] = useState(null)

    const handleBlur = (e) => {
        const isValid = validateEmail(e.target.value)
        const emailInput = document.querySelector('.email-input')
        emailInput.classList.remove('bg-white')
        if (isValid) setValidEmail(true)
        else setValidEmail(false)
    }

    const style = {
        borderColor: '#E4E3EB',
        backgroundColor: '#FFFFFF',
    }
    if (validEmail === true) {
        style.borderColor = '#10B981'
        style.backgroundColor = '#ECFDF5'
    }
    else if (validEmail === false) {
        style.borderColor = '#EF4444'
        style.backgroundColor = '#FEF2F2'
    }

    const warningStyle = {
        display: 'hidden'
    }
    if (validEmail === true) {
        warningStyle.display = 'none'
    }
    if (validEmail === false) {
        warningStyle.display = 'flex'
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
            autoComplete="off"
            value={email}
            style={style}
            onChange={(e) =>{setEmail(e.target.value)}}
            onBlur={(e) => handleBlur(e) }/>    
                <span 
                style={warningStyle}
                className="hidden email-warning text-xs text-red flex items-center gap-2">
                    <img 
                    className="info-circle" 
                    src="/info-circle.svg" 
                    alt="info circle" /> მეილი უნდა მთავრდებოდეს redberry@.ge-ით</span>
            </div>
  )
}