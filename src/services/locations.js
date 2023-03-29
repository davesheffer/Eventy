export const fetchLocations = async () => {
    const res = await fetch('http://localhost:8000/locations');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const locations = await res.json();
    return locations;
};

export const fetchLocation = async id => {
    const res = await fetch(`http://localhost:8000/locations/${id}`);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const location = await res.json();
    return location;
};
