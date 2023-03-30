import { useContext, useState } from 'react';
import AddLocation from '../components/addComponents/AddLocation/AddLocation';
import EditLocation from '../components/editComponents/EditLocation/EditLocation';
import GlobalContext from '../context/GlobalContext';
import { fetchLocation } from '../services/locations';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

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

    const [location, setLocation] = useState({});
    const [editToggle, setEditToggle] = useState(true);
    const [locationName, setLocationName] = useState('');
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
            {!editToggle ? (
                <AddLocation
                    locations={locations}
                    setLocations={setLocations}
                    menuToggle={menuToggle}
                    setMenuToggle={setMenuToggle}
                />
            ) : (
                <EditLocation
                    locations={locations}
                    locationName={locationName}
                    setLocationName={setLocationName}
                    setLocations={setLocations}
                    menuToggle={menuToggle}
                    setMenuToggle={setMenuToggle}
                    location={location}
                    editToggle={editToggle}
                    setEditToggle={setEditToggle}
                />
            )}

            <div className="container mx-auto relative">
                <h1 className="text-2xl font-bold py-4">Locations</h1>
                {loading && <div>Loading</div>}
                {error && <div>Error</div>}
                {locations.length <= 0 && <div> No Locations</div>}
                {locations.map(location => {
                    return (
                        <div className="group py-2 flex items-center justify-between border border-b-gray-900">
                            <h1>{location.locationName}</h1>
                            <div className="icons-container flex opacity-0 group-hover:opacity-100">
                                <AiFillDelete
                                    className="text-2xl ml-[150px] cursor-pointer hover:text-emerald-600"
                                    onClick={() => deleteLocation(location.id)}
                                />
                                <FiEdit
                                    onClick={() => {
                                        fetchLocation(location.id).then(
                                            data => {
                                                setLocationName(
                                                    data.locationName
                                                );
                                                setLocation(data);
                                            }
                                        );

                                        setEditToggle(true);
                                        setMenuToggle(true);
                                    }}
                                    className="text-xl ml-4 cursor-pointer hover:text-emerald-600"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Locations;
