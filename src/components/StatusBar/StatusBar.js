import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

const StatusBar = () => {
    const { events } = useContext(GlobalContext);
    return (
        <div className="flex ml-5">
            <div className="flex items-center  bg-purple-600 p-2 mr-4 rounded  text-white text-sm">
                <p>Total:</p>
                <p className="ml-2">{events.length}</p>
            </div>
            <div className="flex items-center bg-red-600 p-2 mr-4 rounded text-white text-sm">
                <p>Opened:</p>
                <p className="ml-2">
                    {events.filter(item => item.status === 'open').length}
                </p>
            </div>
            <div className="flex items-center bg-green-600 p-2 mr-4 rounded text-white text-sm">
                <p>Closed:</p>
                <p className="ml-2">
                    {events.filter(item => item.status === 'close').length}
                </p>
            </div>
        </div>
    );
};

export default StatusBar;
