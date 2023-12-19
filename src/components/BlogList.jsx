import Blog from "./Blog";

export default function BlogList() {
  return (
    <div className="grid grid-cols-3 px-[76px] gap-[32px] mt-[64px]">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />   
    </div>
  )
}