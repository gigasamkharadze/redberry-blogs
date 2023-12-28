import { useEffect } from "react";
import BlogCard from "./BlogCard";
import { handleScroll } from "./handlers/handleScroll";
import { handleLeftScroll } from "./handlers/handleLeftScroll";
import { handleRightScroll } from "./handlers/handleRightScroll";

export default function SimilarBlogsContainer({ blogs }) {

    useEffect(() => {
        const scrollContainer = document.querySelector(".overflow-x-scroll")
        const leftArrow = document.querySelector(".left-arrow")
        const rightArrow = document.querySelector(".right-arrow")

        scrollContainer.addEventListener("wheel", () => handleScroll(scrollContainer))
        rightArrow.addEventListener("click", () => handleRightScroll(scrollContainer))
        leftArrow.addEventListener("click", () => handleLeftScroll(scrollContainer))
    return () => {
        scrollContainer.removeEventListener("wheel", () => handleScroll(scrollContainer))
        rightArrow.removeEventListener("click", () => handleRightScroll(scrollContainer))
        leftArrow.removeEventListener("click", () => handleLeftScroll(scrollContainer))
        }
    }, [])

  return (
    <div className="max-w-[1750px] w-full">
        <div className="w-full flex mb-10">
            <h2 className="font-semibold text-[32px]">მსგავსი სტატიები</h2>
            <div className="flex ml-auto gap-6">
                <div className="left-arrow w-11 aspect-square flex bg-gray rounded-3xl cursor-default">
                    <img className="m-auto rotate-180" src="/arrow-white.svg" alt="scroll left" />
                </div>
                <div className="right-arrow w-11 aspect-square flex bg-purple rounded-3xl cursor-pointer">
                    <img className="m-auto" src="/arrow-white.svg" alt="scroll left" />
                </div>
            </div>
        </div>
        <div className="flex overflow-x-scroll scrollbar-hide gap-8">
            {blogs.map(blog => {
                return <BlogCard key={blog.id} blog={blog} />
            })}
        </div>
    </div>
  )
}