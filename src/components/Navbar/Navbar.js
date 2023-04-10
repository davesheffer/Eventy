import React from 'react';
import { Link } from 'react-router-dom';
import { BsCalendar2Event } from 'react-icons/bs';
import { useContext } from 'react';
import { UserButton } from '@clerk/clerk-react';
import StatusBar from '../StatusBar/StatusBar';
import GlobalContext from '../../context/GlobalContext';

export default function Navbar() {
    const { setMenuToggle } = useContext(GlobalContext);

    return (
        <div className="bg-slate-200 shadow-md h-[70px]">
            <div className="container py-4 mx-auto flex justify-between items-center">
                <div className="flex">
                    <div className="logo flex items-center text-3xl text-emerald-500">
                        <BsCalendar2Event />
                        <h1 className="font-bold text-3xl ml-2 text-emerald-500">
                            Eventy
                        </h1>
                    </div>
                    <StatusBar />
                </div>

                <div className="flex flex-row items-center">
                    <ul className="mr-10">
                        <Link
                            className="mr-4 hover:text-emerald-500 cursor-pointer font-bold"
                            to="/"
                        >
                            Events
                        </Link>
                        <Link
                            className="mr-4 hover:text-emerald-500 cursor-pointer font-bold"
                            to="/users"
                        >
                            Users
                        </Link>
                        <Link
                            className="mr-4 hover:text-emerald-500 cursor-pointer font-bold"
                            to="/locations"
                        >
                            Locations
                        </Link>
                        <Link
                            className="mr-4 hover:text-emerald-500 cursor-pointer font-bold"
                            to="/categories"
                        >
                            Categories
                        </Link>
                    </ul>
                    <button
                        onClick={() => setMenuToggle(true)}
                        className="rounded-lg bg-emerald-500 py-2 px-4 mr-5 text-white"
                    >
                        +
                    </button>
                    <UserButton />
                </div>
            </div>
        </div>
    );
}
