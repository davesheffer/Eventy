import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import AddEvent from '../components/addComponents/AddEvent/AddEvent';
import Card from '../components/Card/Card';

const Events = () => {
    const {
        events,
        setEvents,
        loading,
        error,
        menuToggle,
        setMenuToggle,
        menuToggleClasses,
    } = useContext(GlobalContext);

    const deleteEvent = id => {
        fetch(`http://localhost:8000/events/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setEvents([...events.filter(event => event.id !== id)]);
            })
            .then(() => console.log(events));
    };

    return (
        <>
            <AddEvent
                setEvents={setEvents}
                events={events}
                setMenuToggle={setMenuToggle}
                menuToggle={menuToggle}
            />
            <div className={menuToggleClasses}></div>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold py-4">Events</h1>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {events.length <= 0 && (
                    <div className="text-1xl">No Events....</div>
                )}

                {events.map(item => {
                    return (
                        <Card
                            key={item.id}
                            id={item.id}
                            location={item.location}
                            category={item.category}
                            timing={item.timing}
                            createdAt={item.createdAt}
                            deleteEvent={deleteEvent}
                        />
                    );
                })}
            </div>
        </>
    );
};
export default Events;
