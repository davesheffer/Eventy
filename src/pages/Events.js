import React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames';
import AddEvent from '../components/AddEvent/AddEvent';
import Card from '../components/Card/Card';
import { useState } from 'react';

const Events = ({
	menuToggle,
	setMenuToggle,
	error,
	setError,
	loading,
	setLoading
	
}) => {

	useEffect(() => {
		getData();
	}, []);

	const [events, setEvents] = useState([]);
		
	const getData = async () => {
		await fetch('http://localhost:8000/events')
			.then((res) => res.json())
			.then((data) => {
				setEvents(data)
				setLoading(false);
				
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}
	function deleteEvent(id) {
		fetch(`http://localhost:8000/events/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			})
			.then(() => {
				setEvents([...events.filter((event) => event.id !== id)]);
			})
			.then(() => console.log(events));
	}
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
			{events.length <= 0 && <div className='text-xl'>No Events....</div>}
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
