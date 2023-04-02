import { useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import classNames from 'classnames';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCategory } from '../../../services/categories';

const AddCategory = ({ menuToggle, setMenuToggle }) => {
    const queryClient = useQueryClient();

    const addCategoryMutate = useMutation({
        mutationFn: addCategory,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
    });

    const [categoryName, setCategoryName] = useState('');
    console.log(categoryName);

    const handleSubmit = async e => {
        e.preventDefault();

        const category = { categoryName };

        addCategoryMutate.mutate({ ...category });
        setMenuToggle(false);
        setCategoryName('');
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
                className="absolute right-4 top-4 text-4xl  cursor-pointer text-emerald-500 "
                onClick={() => setMenuToggle(false)}
            />
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Name"
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
