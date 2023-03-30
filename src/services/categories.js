export const fetchCategories = async () => {
    const res = await fetch('http://localhost:8000/categories');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const categories = await res.json();
    return categories;
};

export const fetchCategory = async id => {
    const res = await fetch(`http://localhost:8000/categories/${id}`);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const category = await res.json();
    return category;
};
