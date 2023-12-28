export default function Hero({ isLoggingIn }) {
  const style  = {
    opacity: isLoggingIn ? 0.5 : 1,
  }
  return (
    <div 
    style={style}
    className="flex justify-between items-center pl-[89px] pr-[76px] my-[64px]">
        <h2 className="text-black text-[64px] font-bold">ბლოგი</h2>
        <img src="/redberry-bg.svg" alt="background image"/>
    </div>
  )
}