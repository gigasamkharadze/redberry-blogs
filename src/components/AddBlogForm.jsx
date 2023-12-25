import { useState } from "react"

export default function AddBlogForm() {
    const [photo, setPhoto] = useState(null)
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [postDate, setPostDate] = useState('')
    const [category, setCategory] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit() {
        const formData = new FormData()
        formData.append('photo', photo)
        formData.append('author', author)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('postDate', postDate)
        formData.append('category', category)
        formData.append('email', email)
        
        // const response = await fetch('http://localhost:3001/blogs', {
        //     method: 'POST',
        //     body: formData
        // })
    }

    return (
        <form className="w-[600px] my-[33px]" action="" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
            <h2 className="font-semibold mb-[40px]">ბლოგის დამატება</h2>
            
            <label htmlFor="photo">ატვირთეთ ფოტო</label>
            <input 
            className="w-full mb-[24px] " 
            type="file" 
            name="photo" 
            id="photo" 
            onChange={(e) => setPhoto(e.target.files[0])}/>
            
            <div className="w-full flex flex-row gap-2 mb-[24px]">
                <div className="flex flex-col flex-grow">
                    <label className="font-semibold" htmlFor="author">ავტორი</label>
                    <input 
                    type="text" 
                    name="author" 
                    id="author" 
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                    <span>მინიმუმ 4 სიმბოლო</span>
                    <span>მინიმუმ 2 სიტყვა</span>
                    <span>მხოლოდ ქართული სიმბოლოები</span>
                </div>

                <div className="flex flex-col flex-grow">
                    <label className="font-semibold" htmlFor="title">სათაური</label>
                    <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <span>მინიმუმ 2 სიმბოლო</span>
                </div>    
            </div>

            <div className="flex flex-col mb-[24px]">
                <label className="font-semibold" htmlFor="description">აღწერა *</label>
                <textarea 
                name="description" 
                id="description" 
                placeholder="შეიყვანეთ აღწერა" 
                cols="30" 
                rows="10"
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>   
                <span>მინიმუმ 2 სიმბოლო</span>
            </div>

            <div className="w-full flex flex-row gap-2 mb-[24px]">
                    <div className="flex flex-col flex-grow">
                        <label htmlFor="post-date">გამოქვეყნების თარიღი</label>
                        <input 
                        type="date" 
                        name="post-date" 
                        id="post-date"
                        onChange={(e) => setPostDate(e.target.value)}
                        />   
                    </div>

                    <div className="flex flex-col flex-grow">
                        <label htmlFor="category">კატეგორია</label>
                        <select 
                        name="category" 
                        id="category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="" disabled hidden>აირჩიე კატეგორია</option>
                            <option value="val1">value1</option>
                            <option value="val2">value2</option>
                            <option value="val3">value3</option>
                        </select>
                    </div>    
                </div>
                
            
            <div className="flex flex-col w-1/2 mb-[40px]">
                <label htmlFor="email">ელ-ფოსტა</label>
                <input 
                type="email" 
                name="email" 
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                />    
                <span>მეილი უნდა მთავრდებოდეს @redberry.ge-ით</span>
            </div>
            
            <button 
            className="w-[288px] block ml-auto py-[10px] bg-purple text-white rounded-[8px]
            font-semibold text-sm"
            type="submit"
            >გამოქვეყნება</button> 
        </form>
    )
}