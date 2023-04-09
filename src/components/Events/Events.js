import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import AddEvent from './AddEvent';
import Event from '../Event/Event';

const Events = () => {
    const {
        events,
        loading,
        error,
        menuToggle,
        setMenuToggle,
        menuToggleClasses,
    } = useContext(GlobalContext);

    return (
        <>
            <AddEvent
                events={events}
                setMenuToggle={setMenuToggle}
                menuToggle={menuToggle}
            />
            <div className={menuToggleClasses}></div>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold py-4">Events</h1>
                    <select name="statusFilter" id="">
                        <option value="all">All</option>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>

                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {events.length <= 0 && (
                    <div className="text-1xl">No Events....</div>
                )}

                {events.map(item => {
                    return (
                        <Event
                            key={item.id}
                            id={item.id}
                            location={item.location}
                            category={item.category}
                            timing={item.timing}
                            status={item.status}
                            createdAt={item.createdAt}
                        />
                    );
                })}
            </div>
        </>
    );
};
export default Events;
