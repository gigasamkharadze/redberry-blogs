import { createBrowserRouter, useNavigate } from 'react-router-dom';

export default function AddBlogNavbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white h-[80px] flex justify-center items-center border-b-2 border-[#E4E3EB]">
        <img 
        src="/redberry-logo.svg" 
        alt="redberry logo" 
        className='cursor-pointer'
        onClick={() => {
          navigate('/');
        }}
        />
    </div>
  )
}