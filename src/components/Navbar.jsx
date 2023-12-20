import { useEffect } from "react";

function Navbar({ setIsLoggingIn, isLoggedIn }){

    useEffect(() => {
        const signInButton = document.querySelector('.sign-in-button');
        signInButton.addEventListener('click', () => {
            setIsLoggingIn(true);
        })

        // cleanup
        return () => {
            signInButton.removeEventListener('click', () => {
                setIsLoggingIn(true);
            })
        }
    }, [])


    return (
        <nav className="flex items-center justify-between px-[76px] py-[20px] text-white bg-white">
            <img src="/redberry-logo.svg" alt="redberry logo" />
            <button className="sign-in-button bg-purple px-[20px] py-[10px] rounded-[8px]">
                {isLoggedIn ? 'დაამატე ბლოგი' : 'შესვლა'}
            </button>
        </nav>
      );
}

export default Navbar;