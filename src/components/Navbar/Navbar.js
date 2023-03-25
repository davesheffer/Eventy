import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar({ menuToggle, setMenuToggle }) {
	return (
		<div className='bg-slate-200 shadow-md'>
			<div className='container px-8 mx-auto py-4 flex justify-between items-center'>
				<h1 className='font-bold text-xl text-emerald-500'>Eventy</h1>
				<div className='flex flex-row items-center'>
					<ul className='mr-10'>
						<Link
							className='mr-4 hover:text-emerald-500 cursor-pointer font-bold'
							to='/'
						>
							Events
						</Link>
						<Link
							className='mr-4 hover:text-emerald-500 cursor-pointer font-bold'
							to='/users'
						>
							Users
						</Link>
						<Link
							className='mr-4 hover:text-emerald-500 cursor-pointer font-bold'
							to='/locations'
						>
							Locations
						</Link>
						<Link
							className='mr-4 hover:text-emerald-500 cursor-pointer font-bold'
							to='/categories'
						>
							Categories
						</Link>
					</ul>
					<button
						onClick={() => setMenuToggle(true)}
						className='rounded-lg bg-emerald-500 py-2 px-4 text-white'
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
}
