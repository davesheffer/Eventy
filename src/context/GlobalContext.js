import { useState } from 'react';
import { createContext, useEffect } from 'react';
import classNames from 'classnames';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../services/categories';
import { fetchLocations } from '../services/locations';
import { fetchEvents } from '../services/events';
import { fetchUsers } from '../services/users';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const { data: categories, isLoading } = useQuery(
        ['categories'],
        fetchCategories
    );

    const [locations, setLocations] = useState([]);
    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);

    const menuToggleClasses = classNames(
        'p-4',
        'h-screen',
        'absolute',
        'bg-gray-600',
        'transition-all',
        'z-10',
        'opacity-0',
        'transition-all',

        {
            'bg-gray-600': menuToggle,
            'opacity-90': menuToggle,
            'w-full': menuToggle,
            'w-0': !menuToggle,
        }
    );

    useEffect(() => {
        fetchEvents().then(events => setEvents(events));
        fetchUsers().then(users => setUsers(users));
        fetchLocations().then(locations => setLocations(locations));
        // fetchCategories().then(categories => setCategories(categories));
        console.log(locations);
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                events,
                setEvents,
                users,
                setUsers,
                categories,
                // setCategories,
                locations,
                setLocations,
                loading,
                setLoading,
                error,
                setError,
                menuToggle,
                setMenuToggle,
                menuToggleClasses,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;
