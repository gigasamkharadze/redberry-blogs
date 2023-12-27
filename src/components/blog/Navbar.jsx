import { createBrowserRouter, useNavigate } from 'react-router-dom';

function Navbar({ setIsLoggingIn, login, isLoggedIn }){
    const navigate = useNavigate();
    return (
        <nav className="w-full max-w-[1920px] flex items-center justify-between px-[76px] py-[20px] text-white bg-white">
            <img 
            onClick={() => {navigate('/');}}
            src="/redberry-logo.svg" 
            className='cursor-pointer'
            alt="redberry logo" />
            {isLoggedIn ? 
            <button 
            className="add-blog-button bg-purple px-[20px] py-[10px] rounded-[8px]"
            onClick={() => {navigate('/add-blog');}}
            >დაამატე ბლოგი</button>
            :
            <button 
            className="sign-in-button bg-purple px-[20px] py-[10px] rounded-[8px]"
            onClick={() => {setIsLoggingIn(true);}}
            >შესვლა</button>
            }
        </nav>
      );
}

export default Navbar;