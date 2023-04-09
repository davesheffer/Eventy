import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { AiFillCloseSquare } from 'react-icons/ai';
import classNames from 'classnames';

const EditLocation = ({
    location,
    locationName,
    setLocationName,
    setEditToggle,
}) => {
    const { locations, setLocations, menuToggle, setMenuToggle } =
        useContext(GlobalContext);

    const handleSubmit = async e => {
        e.preventDefault();

        const updatedLocation = { id: location.id, locationName: locationName };

        await fetch(`http://localhost:8000/locations/${location.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedLocation),
        });

        const index = locations.findIndex(l => l.id === updatedLocation.id);
        const newLocations = [...locations];
        newLocations[index] = updatedLocation;

        setLocations(newLocations);
        setMenuToggle(false);
        setEditToggle(false);
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
            <h1 className="text-4xl font-bold mb-4 ">Edit Location</h1>
            <AiFillCloseSquare
                className="absolute right-4 top-4 text-4xl  cursor-pointer text-emerald-500 "
                onClick={() => {
                    setMenuToggle(false);
                    setEditToggle(false);
                }}
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
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditLocation;
