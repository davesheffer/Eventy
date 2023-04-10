import { useContext, useState } from 'react';
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
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredEvents = events.filter(item => {
        if (statusFilter === 'all') {
            return item;
        } else if (statusFilter === 'opened') {
            return item.status === 'open';
        } else if (statusFilter === 'closed') {
            return item.status === 'close';
        }
        return item;
    });
    return (
        <>
            <AddEvent
                events={events}
                setMenuToggle={setMenuToggle}
                menuToggle={menuToggle}
            />
            <div className={menuToggleClasses}></div>
            <div className="container mx-auto">
                <div className="events h-full">
                    <div className="flex justify-between items-center border-b-2 mb-4">
                        <div className="flex items-center ">
                            <h1 className="text-2xl font-bold py-4">Events</h1>
                        </div>

                        <div className="flex">
                            <div className="flex items-center">
                                <p>Status</p>
                                <select
                                    name="statusFilter"
                                    className="border border-gray-300 rounded-md px-2 ml-2"
                                    value={statusFilter}
                                    onChange={e =>
                                        setStatusFilter(e.target.value)
                                    }
                                >
                                    <option value="all">All</option>
                                    <option value="opened">Opened</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="h-[750px] w-full overflow-y-scroll">
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                        {filteredEvents?.length <= 0 && (
                            <div>No {statusFilter} events</div>
                        )}
                        {filteredEvents.map(item => {
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
                </div>
            </div>
        </>
    );
};
export default Events;
