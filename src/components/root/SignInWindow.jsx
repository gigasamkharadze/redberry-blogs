import { useEffect } from "react"

export default function SignInWindow({ setIsLoggingIn, login  }) {
  
    useEffect(() => {
        const closeBtn = document.querySelector('.close-btn')
        closeBtn.addEventListener('click', () => {
            setIsLoggingIn(false)
        })
        return () => {
            closeBtn.removeEventListener('click', () => {
                setIsLoggingIn(false)
            })
        }
    }, [])

    async function handleSubmit() {
        const emailInput = document.querySelector('#email')
        const emailValue = emailInput.value
        const response = await fetch('https://api.blog.redberryinternship.ge/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: emailValue
            })
        })
        if (response.status===204) {
            document.querySelector('form').remove()
            document.querySelector('.ok-message').classList.remove('hidden')
            document.querySelector('.ok-btn').classList.remove('hidden')
            emailInput.classList.add('hidden')
            document.querySelector('.sign-in-text').classList.add('hidden')
            localStorage.setItem('isLoggedIn', true)
            login()
        }else {
            emailInput.classList.add('border-red')
            emailInput.classList.add('focus:border-red')
            emailInput.classList.add('bg-lightRed')
            emailInput.classList.add('focus:outline-none')
            const errorMessage = document.querySelector('.error-message')
            errorMessage.classList.remove('hidden')
        }   
    }

    const handleChange = (e) => {
        const emailValue = e.target.value
        const regex = /@redberry\.ge$/
        const emailInput = document.querySelector('#email')
        if (regex.test(emailValue)) {
            emailInput.classList.remove('border-red')
            emailInput.classList.remove('focus:border-red')
            emailInput.classList.remove('bg-lightRed')
            emailInput.classList.remove('focus:outline-none')
        }else{
            emailInput.classList.add('border-red')
            emailInput.classList.add('focus:border-red')
            emailInput.classList.add('bg-lightRed')
            emailInput.classList.add('focus:outline-none')
        }
    }
  
    return (
    <div 
    className="shadow-xl z-10 absolute bg-white left-0 right-0 top-[314px] mx-auto max-w-[640px] px-[26px] py-[40px] rounded-xl">
        <img src="/x.svg" alt="close" className="close-btn absolute top-[20px] right-[18px] cursor-pointer" />
        <div className="mb-[24px] hidden ok-message">
            <img src="/tick-circle.svg" alt="tick" className="mx-auto mb-[10px]" />
            <h4 className="text-center font-bold text-2xl">წარმატებული ავტორიზაცია</h4>
        </div>
            <button 
            className="hidden ok-btn bg-purple text-white font-semibold w-full mt-[24px] rounded-[8px] py-[10px]"
            onClick={() => {setIsLoggingIn(false)}}
            >კარგი</button>
        <h2 className="sign-in-text w-full text-center mb-[24px] font-bold">შესვლა</h2>
        <form method="post">
            <label htmlFor="email" className="font-semibold">ელ-ფოსტა</label>
            <input 
            autoComplete="off"
            type="email" 
            name="email" 
            id="email" 
            placeholder="Example@redberry.ge"
            onChange={(e) => handleChange(e)}
            className={
                "w-full rounded-[12px] border-2 border-gray focus:border-purple focus:outline-none " +
                "py-[12px] px-[16px] mt-[8px] font-normal "} />
            <div className="error-message hidden flex mt-[8px]">
                <img src="/info-circle.svg" alt="error" />
                <span className="text-red font-semibold">ელ-ფოსტა არ მოიძებნა</span>
            </div>
            <button
            onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} 
            className="bg-purple text-white font-semibold w-full mt-[24px] rounded-[8px] py-[10px]">შესვლა</button>
        </form>
    </div>
  )
}