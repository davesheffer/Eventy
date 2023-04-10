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
    const { data: categories } = useQuery(['categories'], fetchCategories);
    const { data: events } = useQuery(['events'], fetchEvents);
    const { data: locations } = useQuery(['locations'], fetchLocations);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);

    const menuToggleClasses = classNames(
        'p-4',
        'h-100',
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
        fetchUsers().then(users => setUsers(users));
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                users,
                setUsers,
                events,
                categories,
                locations,
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
