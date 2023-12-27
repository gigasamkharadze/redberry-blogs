import React, { createContext, useContext, useEffect, useState } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("https://api.blog.redberryinternship.ge/api/categories")
        .then((res) => res.json())
        .then((data) => {
            const categories = data.data;
            setCategories(categories);
        });
    }, []);

    return (
        <CategoryContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoryContext.Provider>
    );
}

export const useCategory = () => useContext(CategoryContext);

