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

export default function AddBlogForm({ setShowSuccessMessage }) {
    const [photo, setPhoto] = useState(null)
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [postDate, setPostDate] = useState(new Date())
    const [showCalendar, setShowCalendar] = useState(false)
    const [categories, setCategories] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [email, setEmail] = useState('')

    useEffect(() => {
        fetch('https://api.blog.redberryinternship.ge/api/categories')
        .then(res => res.json())
        .then(data => {
          setCategories(data.data)
        })
      }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', photo)
        formData.append('author', author)
        formData.append('publish_date', postDate.toISOString().slice(0, 10))
        formData.append('categories', JSON.stringify(selectedCategories))
        formData.append('email', email)
        
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
            setShowSuccessMessage(true)
        }
    }

    return (
        <form className="w-[800px] my-[33px]" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="font-bold mb-[40px] text-[32px]">ბლოგის დამატება</h2>
            
            <label className="font-semibold text-sm" htmlFor="photo">ატვირთეთ ფოტო</label>
            {photo ? 
            <PhotoHolder photo={photo} setPhoto={setPhoto} /> : 
            <PhotoUploader setPhoto={setPhoto} />}
            
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
    )
}