import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    const usersList = users?.map((user) => (
        <div key={user.id} className="flex items-center justify-between border py-4">
            <div className="flex flex-row items-center">
                <div className="font-bold rounded-full bg-emerald-300 p-4 w-14 mr-4">
                    {user.initials}
                </div>
                <h1>{user.name}</h1>
            </div>

            <div className="flex flex-col">
                <h2>
                    <strong>Email:</strong> {user.email}
                </h2>
                <h2>
                    <strong>Mobile:</strong> {user.mobile}
                </h2>
            </div>
        </div>
    ));
    console.log(users);

    return (
        <div className="container mx-auto">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-3xl font-bold my-4">Users</h1>
                <AiOutlineUserAdd className="text-4xl cursor-pointer hover:text-emerald-400 transition-all" />
            </div>

            {usersList}
        </div>
    );
}
