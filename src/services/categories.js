export const fetchCategories = async () => {
    const res = await fetch('http://localhost:8000/categories');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const categories = await res.json();
    return categories;
};
