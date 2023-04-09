export const fetchEvents = async () => {
    const res = await fetch('http://localhost:8000/events');
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const events = await res.json();
    return events;
};

// Delete Event
export const deleteEvent = async id => {
    const res = await fetch(`http://localhost:8000/events/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const deletedEvent = await res.json();
    return deletedEvent;
};

// Add Event
export const addEvent = async event => {
    const res = await fetch('http://localhost:8000/events', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(event),
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const newEvent = await res.json();
    return newEvent;
};

//Update Event
export const updateEvent = async event => {
    console.log(event.status);
    const res = await fetch(`http://localhost:8000/events/${event.id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(event),
    });
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    const updatedEvent = await res.json();

    return updatedEvent;
};
