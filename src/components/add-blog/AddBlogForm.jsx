import { useEffect, useState } from "react"
import 'react-calendar/dist/Calendar.css';

import PhotoUploader from './PhotoUploader';
import PhotoHolder from './PhotoHolder';
import AuthorInput from './AuthorInput';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';
import DateInput from './DateInput';
import CategoryInput from "./CategoryInput";
import EmailInput from "./EmailInput";
import SubmitButton from "./SubmitButton";

import useLocalStorage from '../../hooks/useLocalStorage'
import { useCategory } from "../../context/CategoryContext";
import { useBlog } from "../../context/BlogContext";

import { cleanUpValidations } from "./handlers/cleanUpValidations";

export default function AddBlogForm({ setShowSuccessMessage, showSuccessMessage }) {
    const [photo, setPhoto] = useLocalStorage('photo', '')
    const [photoName, setPhotoName] = useLocalStorage('photoName', '')  
    const [author, setAuthor] = useLocalStorage('author', '')
    const [title, setTitle] = useLocalStorage('title', '')
    const [description, setDescription] = useLocalStorage('description', '')
    const [postDate, setPostDate] = useLocalStorage('postDate', new Date())
    const [showCalendar, setShowCalendar] = useState(false)
    const { categories } = useCategory()
    const [selectedCategories, setSelectedCategories] = useLocalStorage('selectedInputCategories', [])
    const [email, setEmail] = useLocalStorage('email', '')
    const { fetchBlogs } = useBlog()

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)    
        formData.append('author', author)
        formData.append('publish_date', new Date(postDate).toISOString().slice(0, 10))
        formData.append('categories', JSON.stringify(selectedCategories))
        formData.append('email', email)

        const base64 = await fetch(photo)
        const blob = await base64.blob()
        formData.append('image', blob)

        const token = localStorage.getItem('token')
        const response = await fetch('https://api.blog.redberryinternship.ge/api/blogs', {
            method: 'POST',
            headers: {
                contentType: 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
            body: formData
        })
        if (response.status === 204) {
            console.log('success')
            setShowSuccessMessage(true)
        }
        setAuthor('')
        setTitle('')
        setDescription('')
        setPostDate(new Date())
        setPhoto('')
        setPhotoName('')
        setSelectedCategories([])
        setEmail('')
        fetchBlogs()
        cleanUpValidations()
    }  

    const style = {
        opacity: showSuccessMessage ? .5 : 1,
    }

    return (
    <div 
    style={style}
    className="w-[800px] my-[33px]">
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2 className="font-bold mb-[40px] text-[32px]">ბლოგის დამატება</h2>
            
            <p className="font-semibold text-sm">ატვირთეთ ფოტო</p>
            {photo ? 
            <PhotoHolder photo={photo} setPhoto={setPhoto} photoName={photoName} /> : 
            <PhotoUploader setPhoto={setPhoto} setPhotoName={setPhotoName} />}
            
            <div className="w-full flex flex-row gap-2 mb-[24px]">
                <AuthorInput author={author} setAuthor={setAuthor} />
                <TitleInput title={title} setTitle={setTitle} />
            </div>

            <DescriptionInput description={description} setDescription={setDescription} />

            <div className="w-full relative flex flex-row gap-2 mb-[24px]">
                <DateInput postDate={postDate} setPostDate={setPostDate} showCalendar={showCalendar} setShowCalendar={setShowCalendar} />
                <CategoryInput categories={categories} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
            </div>
            
            <EmailInput email={email} setEmail={setEmail} />
            <SubmitButton 
                photo={photo} 
                author={author} 
                title={title} 
                description={description} 
                postDate={postDate} 
                categories={selectedCategories} 
                email={email}/>
        </form>
    </div>
    )
}