import { useState } from 'react';
import classNames from 'classnames';
import { AiFillCloseSquare } from 'react-icons/ai';

const AddCategory = ({
    categories,
    setCategories,
    menuToggle,
    setMenuToggle,
}) => {
    const [categoryName, setCategoryName] = useState('');

    const lastId = categories[categories.length - 1]?.id || 0;
    const handleSubmit = e => {
        e.preventDefault();
        const category = { categoryName };

        fetch('http://localhost:8000/categories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(category),
        })
            .then(() => {
                setCategories([
                    ...categories,
                    (categories = { id: lastId + 1, ...category }),
                ]);
                setCategoryName('');
                setMenuToggle(false);
            })
            .then(() => console.log(category));
    };

    const menuToggleClasses = classNames(
        'fixed',
        'right-0',
        'top-0',
        'h-full',
        'bg-slate-300',
        'z-40',
        'py-4',
        'px-4',
        'shadow-md',
        'w-1/4',
        'transition-all',

        {
            'translate-x-full': !menuToggle,
        }
    );
    return (
        <div className={menuToggleClasses}>
            <h1 className="text-4xl font-bold mb-4 ">Add Category</h1>
            <AiFillCloseSquare
                className="absolute right-4 top-4 text-4xl cursor-pointer text-emerald-500 "
                onClick={() => setMenuToggle(false)}
            />
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />

                <button className="bg-emerald-500 py-4 font-bold text-white">
                    Save
                </button>
            </form>
        </div>
    );
};
export default AddCategory;
