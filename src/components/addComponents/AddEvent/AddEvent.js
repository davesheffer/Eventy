import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames';
import { AiFillCloseSquare } from 'react-icons/ai';

const AddEvent = ({ events, setEvents, menuToggle, setMenuToggle }) => {
    const [location, setLocation] = useState('');
    const [createdAt, setCreatedAt] = useState(moment().format('yyyy-MM-DD'));
    const [category, setCategory] = useState('');
    const [timing, setTiming] = useState('');
    const lastId = events[events.length - 1]?.id || 0;
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const event = { location, createdAt, category, timing };

        fetch('http://localhost:8000/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event),
        })
            .then(() => {
                setEvents([...events, (events = { id: lastId + 1, ...event })]);
                setLocation('');
                setCreatedAt(moment().format('yyyy-MM-DD'));
                setCategory('');
                setTiming('');
                setMenuToggle(false);
            })
            .then(navigate('/'))
            .then(() => console.log(event));
    };

    const menuToggleClasses = classNames(
        'fixed',
        'right-0',
        'top-0',
        'h-full',
        'bg-slate-300',
        'z-40',
        'py-4',
        'px-4',
        'shadow-md',
        'w-1/4',
        'transition-all',

        {
            'translate-x-full': !menuToggle,
        }
    );
    return (
        <div className={menuToggleClasses}>
            <h1 className="text-4xl font-bold mb-4 ">Add Event</h1>
            <AiFillCloseSquare
                className="absolute right-4 top-4 text-4xl cursor-pointer text-emerald-500 "
                onClick={() => setMenuToggle(false)}
            />
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
                <input
                    className="p-2 mb-4"
                    type="date"
                    value={createdAt}
                    onChange={e => setCreatedAt(e.target.value)}
                />
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Timing"
                    value={timing}
                    onChange={e => setTiming(e.target.value)}
                />
                <button className="bg-emerald-500 py-4 font-bold text-white">
                    Save
                </button>
            </form>
        </div>
    );
};
export default AddEvent;
