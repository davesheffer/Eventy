import React, { useEffect, useState } from 'react';
import AddUser from '../components/AddUser/AddUser';
import classNames from 'classnames';

const Users = ({ menuToggle, setMenuToggle,loading,setLoading, error, setError }) => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		setLoading(true);
		await fetch('http://localhost:8000/users')
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			}).catch((err) => {
				console.error(err);
				setLoading(false);
				setError(true)
			})

	}
	useEffect(() => {
		getUsers()
	}, []);

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

	return (
		<div className='container px-8 mx-auto'>
			{loading && <div>Loading</div>}
			{error && <div>error</div>}
			<AddUser
				users={users}
				setUsers={setUsers}
				menuToggle={menuToggle}
				setMenuToggle={setMenuToggle}
			/>
			<div className={menuToggleClasses}></div>
			<div className='flex flex-row items-center '>
				<h1 className='text-3xl font-bold my-4'>Users</h1>
			</div>
			{users.length <= 0 && <div>No users</div>}
			{users?.map((user) => (
				<div
					key={user.id}
					className='flex items-center justify-between border py-4'
				>
					<div className='flex flex-row items-center'>
						<div className='font-bold rounded-full bg-emerald-300 p-4 w-14 mr-4'>
							{user.initials}
						</div>
						<h1>{user.name}</h1>
					</div>

					<div className='flex flex-col'>
						<h2>
							<strong>Email:</strong> {user.email}
						</h2>
						<h2>
							<strong>Mobile:</strong> {user.mobile}
						</h2>
					</div>
				</div>
			))}
		</div>
	);
};
export default Users;
