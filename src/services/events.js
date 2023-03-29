export const fetchEvents = async () => {
    const res = await fetch('http://localhost:8000/events');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const events = await res.json();
    return events;
};
