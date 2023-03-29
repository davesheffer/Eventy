import { AiFillDelete } from 'react-icons/ai';
import AddLocation from '../components/addComponents/AddLocation/AddLocation';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
const Locations = () => {
    const {
        locations,
        setLocations,
        loading,
        error,
        menuToggle,
        setMenuToggle,
        menuToggleClasses,
    } = useContext(GlobalContext);

    const deleteLocation = id => {
        fetch(`http://localhost:8000/Locations/${id}`, {
            method: 'DELETE',
        }).then(() => {
            const newLocations = locations.filter(
                location => location.id !== id
            );
            setLocations(newLocations);
        });
    };

    return (
        <>
            <AddLocation
                locations={locations}
                setLocations={setLocations}
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
            />
            <div className={menuToggleClasses}></div>
            <div className="container  mx-auto relative">
                <h1 className="text-2xl font-bold py-4">Locations</h1>
                {loading && <div>Loading</div>}
                {error && <div>Error</div>}
                {locations.length <= 0 && <div> No Locations</div>}
                {locations.map(location => {
                    return (
                        <div className="flex items-center justify-between border border-b-gray-900">
                            <h1>{location.locationName}</h1>
                            <AiFillDelete
                                className="text-2xl ml-[150px] cursor-pointer hover:text-emerald-600"
                                onClick={() => deleteLocation(location.id)}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Locations;
