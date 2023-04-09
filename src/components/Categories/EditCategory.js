import { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCategory } from '../../services/categories';
import GlobalContext from '../../context/GlobalContext';
import { AiFillCloseSquare } from 'react-icons/ai';
import classNames from 'classnames';

const EditCategory = ({ category, setCategory, setEditToggle }) => {
    const { menuToggle, setMenuToggle } = useContext(GlobalContext);
    const queryClient = useQueryClient();
    const updateCategoryMutation = useMutation(updateCategory, {
        onSuccess: () => {
            setMenuToggle(false);
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
    });
    const handleSubmit = async e => {
        e.preventDefault();
        updateCategoryMutation.mutate(category);
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
            <h1 className="text-4xl font-bold mb-4 ">Edit Category</h1>
            <AiFillCloseSquare
                className="absolute right-4 top-4 text-4xl  cursor-pointer text-emerald-500 "
                onClick={() => {
                    setMenuToggle(false);
                    setEditToggle(false);
                }}
            />
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Name"
                    defaultValue={category.categoryName}
                    onChange={e =>
                        setCategory({
                            id: category.id,
                            categoryName: e.target.value,
                        })
                    }
                />

                <button className="bg-emerald-500 py-4 font-bold text-white">
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditCategory;
