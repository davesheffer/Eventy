import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import AddCategory from '../components/addComponents/AddCategory/AddCategory';

const Categories = ({ menuToggle, setMenuToggle, menuToggleClasses }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const deleteCategory = id => {
        fetch(`http://localhost:8000/categories/${id}`, {
            method: 'DELETE',
        }).then(() => {
            const newCategories = categories.filter(
                category => category.id !== id
            );
            setCategories(newCategories);
        });
    };
    return (
        <>
            <AddCategory
                categories={categories}
                setCategories={setCategories}
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
            />

            <div className="container mx-auto">
                <h1 className="text-2xl font-bold my-4">Categories</h1>
                {categories.length <= 0 && <div> No Categories</div>}
                {categories.map(category => {
                    return (
                        <div
                            key={category.id}
                            className="flex items-center justify-between border border-b-gray-900"
                        >
                            <h1>{category.categoryName}</h1>
                            <AiFillDelete
                                className="text-2xl ml-[150px] cursor-pointer hover:text-emerald-600"
                                onClick={() => deleteCategory(category.id)}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Categories;
