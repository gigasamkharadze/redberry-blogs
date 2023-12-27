import { createBrowserRouter, useNavigate } from 'react-router-dom';

export default function SuccessMessage({ setShowSuccessMessage }) {
  const navigate = useNavigate();
  return (
    <div className="absolute flex flex-col z-10 top-1/2 left-1/2 -translate-x-1/2 
      -translate-y-1/2 h-[300px] w-[640px] bg-white px-6 rounded-xl">
        <img 
        src="/x.svg" 
        alt="close" 
        className="absolute top-5 right-5 cursor-pointer" 
        onClick={() => setShowSuccessMessage(false)}
        />
        <div className="flex flex-col items-center mt-16 mb-12">
            <img src="/tick-circle.svg" alt="success message" />
            <h3 className='text-xl mt-4'>ჩანაწერი წარმატებით დაემატა</h3>
        </div>
        <button
        className="bg-purple text-white rounded-lg w-full py-2.5 text-base 
        font-normal hover:opacity-90 transition duration-300 ease-in-out"
        onClick={() => navigate('/')}
        >მთავარ გვერდზე დაბრუნება</button>
    </div>
  )
}