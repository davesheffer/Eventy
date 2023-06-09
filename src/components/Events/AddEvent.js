import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddEvent } from '../../queries/events';
import moment from 'moment';
import classNames from 'classnames';
import { AiFillCloseSquare } from 'react-icons/ai';
import GlobalContext from '../../context/GlobalContext';

const AddEvent = ({ events, setEvents, menuToggle, setMenuToggle }) => {
    const { categories, locations } = useContext(GlobalContext);
    const [location, setLocation] = useState('');
    const [createdAt, setCreatedAt] = useState(moment().format('yyyy-MM-DD'));
    const [category, setCategory] = useState('');
    const [timing, setTiming] = useState('');
    const lastId = events[events.length - 1]?.id || 0;
    const { mutate: addEvent } = useAddEvent();
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const event = { location, createdAt, category, timing, status: 'open' };

        addEvent(event);
        setLocation('');
        setCreatedAt(moment().format('yyyy-MM-DD'));
        setCategory('');
        setTiming('');
        setMenuToggle(false);
        navigate('/');
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
                <select
                    name="locations"
                    id="locations"
                    className="p-2 mb-4"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                >
                    <option value="" disabled defaultValue>
                        Choose a Location
                    </option>
                    {locations?.map(loc => {
                        return (
                            <option value={loc.locationName} key={loc.id}>
                                {loc.locationName}
                            </option>
                        );
                    })}
                </select>
                <input
                    className="p-2 mb-4"
                    type="date"
                    value={createdAt}
                    onChange={e => setCreatedAt(e.target.value)}
                />
                <select
                    name="categories"
                    id="categories"
                    className="p-2 mb-4"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="" disabled defaultValue>
                        Choose a category
                    </option>
                    {categories?.map(cat => {
                        return (
                            <option value={cat.name} key={cat.id}>
                                {cat.categoryName}
                            </option>
                        );
                    })}
                </select>

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
