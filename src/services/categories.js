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

export const addCategory = async category => {
    const res = await fetch('http://localhost:8000/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category),
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const newCategory = await res.json();
    return newCategory;
};
export const deleteCategory = async id => {
    const res = await fetch(`http://localhost:8000/categories/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const newCategory = await res.json();
    return newCategory;
};

export const updateCategory = async category => {
    const res = await fetch(`http://localhost:8000/categories/${category.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category),
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const newCategory = await res.json();
    return newCategory;
};
