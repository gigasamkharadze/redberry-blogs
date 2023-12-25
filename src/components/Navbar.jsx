import { createBrowserRouter, useNavigate } from 'react-router-dom';

function Navbar({ setIsLoggingIn, isLoggedIn }){
    const navigate = useNavigate();
    return (
        <nav className="flex items-center justify-between px-[76px] py-[20px] text-white bg-white">
            <img src="/redberry-logo.svg" alt="redberry logo" />
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