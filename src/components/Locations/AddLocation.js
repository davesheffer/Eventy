import { useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import classNames from 'classnames';

const AddLocation = ({
    locations,
    setLocations,
    menuToggle,
    setMenuToggle,
}) => {
    const lastId = locations[locations.length - 1]?.id || 0;
    const [locationName, setLocationName] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        const location = { locationName };

        await fetch('http://localhost:8000/locations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(location),
        }).then(() => {
            setLocations([
                ...locations,
                (locations = { id: lastId + 1, ...location }),
            ]);
            setMenuToggle(false);
            setLocationName('');
        });
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
            <h1 className="text-4xl font-bold mb-4 ">Add Location</h1>
            <AiFillCloseSquare
                className="absolute right-4 top-4 text-4xl  cursor-pointer text-emerald-500 "
                onClick={() => setMenuToggle(false)}
            />
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Name"
                    value={locationName}
                    onChange={e => setLocationName(e.target.value)}
                />

                <button className="bg-emerald-500 py-4 font-bold text-white">
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddLocation;
