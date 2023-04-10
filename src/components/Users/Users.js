import AddUser from './AddUser';
import classNames from 'classnames';
import { AiFillDelete } from 'react-icons/ai';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const Users = () => {
    const { users, setUsers, loading, error, menuToggle, setMenuToggle } =
        useContext(GlobalContext);

    const deleteUser = async id => {
        await fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE',
        });
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    };
    const menuToggleClasses = classNames(
        'p-4',
        'h-full',
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

    return (
        <>
            <AddUser
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
                users={users}
                setUsers={setUsers}
            />
            <div className={menuToggleClasses}></div>
            <div className="container mx-auto ">
                {loading && <div>Loading</div>}
                {error && <div>error</div>}
                <h1 className="text-2xl font-bold py-4">Users</h1>
                {users?.length <= 0 && <div>No users</div>}
                {users?.map(user => (
                    <div
                        key={user.id}
                        className="flex items-center justify-between border py-4"
                    >
                        <div className="flex flex-row items-center">
                            <div className="font-bold rounded-full bg-emerald-300 w-10 h-10 mr-4 flex items-center justify-center">
                                {user.initials}
                            </div>
                            <h1>{user.name}</h1>
                            <div className="flex flex-row ml-10 gap-8">
                                <h2>
                                    <strong>Email:</strong> {user.email}
                                </h2>
                                <h2>
                                    <strong>Mobile:</strong> {user.mobile}
                                </h2>
                            </div>
                        </div>
                        <AiFillDelete
                            onClick={() => deleteUser(user.id)}
                            className="text-2xl ml-[150px] cursor-pointer hover:text-emerald-600"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
export default Users;
