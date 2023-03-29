export const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/users');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const users = await res.json();
    return users;
};
