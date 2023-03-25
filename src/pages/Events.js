import React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames';
import AddEvent from '../components/AddEvent/AddEvent';
import Card from '../components/Card/Card';

const Events = ({
	events,
	setEvents,
	menuToggle,
	setMenuToggle,
	getData,
	error,
	loading,
	deleteEvent,
}) => {
	useEffect(() => {
		getData();
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
		<div className='container px-8 mx-auto mt-4'>
			{loading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			<AddEvent
				setEvents={setEvents}
				events={events}
				setMenuToggle={setMenuToggle}
				menuToggle={menuToggle}
			/>
			<div className={menuToggleClasses}></div>
			{events.map((item) => {
				return (
					<Card
						key={item.id}
						id={item.id}
						location={item.location}
						category={item.category}
						timing={item.timing}
						createdAt={item.createdAt}
						deleteEvent={deleteEvent}
					/>
				);
			})}
		</div>
	);
};
export default Events;
