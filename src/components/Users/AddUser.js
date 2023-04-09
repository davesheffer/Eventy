import React from 'react';
import { useState } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import classNames from 'classnames';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const AddUser = () => {
    const { menuToggle, setMenuToggle, users, setUsers } =
        useContext(GlobalContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const initials =
            name[0].charAt(0).toUpperCase() + name[1].charAt(0).toUpperCase();
        const user = { initials, name, email, mobile };
        setUsers([...users, user]);
        setMenuToggle(false);
        setName('');
        setEmail('');
        setMobile('');
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
            <h1 className="text-4xl font-bold mb-4 ">Add User</h1>
            <AiFillCloseSquare
                className="absolute right-4 top-4 text-4xl  cursor-pointer text-emerald-500 "
                onClick={() => setMenuToggle(false)}
            />
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Email Adress"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="p-2 mb-4"
                    type="text"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                />
                <button className="bg-emerald-500 py-4 font-bold text-white">
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddUser;
