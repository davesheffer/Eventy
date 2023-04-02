import { useContext, useState } from 'react';
import EditCategory from '../components/editComponents/EditCategory/EditCategory';
import AddCategory from '../components/addComponents/AddCategory/AddCategory';
import GlobalContext from '../context/GlobalContext';
import { fetchCategory } from '../services/categories';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

const Categories = () => {
    const {
        categories,
        loading,
        error,
        menuToggle,
        setMenuToggle,
        menuToggleClasses,
    } = useContext(GlobalContext);

    const [category, setCategory] = useState({});
    const [editToggle, setEditToggle] = useState(false);
    const [editCategoryName, setEditCategoryName] = useState('');

    const deleteCategory = id => {
        fetch(`http://localhost:8000/Categories/${id}`, {
            method: 'DELETE',
        }).then(() => {
            const newCategory = categories.filter(
                category => category.id !== id
            );
            // setCategories(newCategory);
        });
    };
    console.log(categories);
    return (
        <>
            {!editToggle ? (
                <AddCategory
                    categories={categories}
                    // setCategories={setCategories}
                    menuToggle={menuToggle}
                    setMenuToggle={setMenuToggle}
                />
            ) : (
                <EditCategory
                    categories={categories}
                    editCategoryName={editCategoryName}
                    setEditCategoryName={setEditCategoryName}
                    fetchCategory={fetchCategory}
                    // setCategories={setCategories}
                    menuToggle={menuToggle}
                    setMenuToggle={setMenuToggle}
                    category={category}
                    setCategory={setCategory}
                    editToggle={editToggle}
                    setEditToggle={setEditToggle}
                />
            )}

            <div className="container mx-auto relative">
                <h1 className="text-2xl font-bold py-4">Categories</h1>
                {loading && <div>Loading</div>}
                {error && <div>Error</div>}
                {categories?.length <= 0 && <div> No Categories</div>}
                {categories?.map(category => {
                    return (
                        <div
                            key={category.id}
                            className="group py-2 flex items-center justify-between border border-b-gray-900"
                        >
                            <h1>{category.categoryName}</h1>
                            <div className="icons-container flex opacity-0 group-hover:opacity-100">
                                <AiFillDelete
                                    className="text-2xl ml-[150px] cursor-pointer hover:text-emerald-600"
                                    onClick={() => deleteCategory(category.id)}
                                />
                                <FiEdit
                                    onClick={() => {
                                        fetchCategory(category.id).then(
                                            data => {
                                                setCategory(data);
                                            }
                                        );

                                        setEditToggle(true);
                                        setMenuToggle(true);
                                    }}
                                    className="text-xl ml-4 cursor-pointer hover:text-emerald-600"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Categories;
