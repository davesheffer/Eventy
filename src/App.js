import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Events from './pages/Events';
import Users from './pages/Users';
import Locations from './pages/Locations';
import Categories from './pages/Categories';

import { Routes, Route } from 'react-router-dom';
function App() {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [menuToggle, setMenuToggle] = useState(false);

	function getData() {
		fetch('http://localhost:8000/events')
			.then((res) => res.json())
			.then((data) => {
				setEvents(data);
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
	console.log(events);
	return (
		<div className='App relative'>
			<Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

			<main>
				<Routes>
					<Route
						path='/'
						element={
							<Events
								setEvents={setEvents}
								events={events}
								getData={getData}
								loading={loading}
								error={error}
								menuToggle={menuToggle}
								setMenuToggle={setMenuToggle}
								deleteEvent={deleteEvent}
							/>
						}
					/>
					<Route
						path='/users'
						element={
							<Users menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
						}
					/>
					<Route
						path='/locations'
						element={
							<Locations
								menuToggle={menuToggle}
								setMenuToggle={setMenuToggle}
							/>
						}
					/>
					<Route
						path='/categories'
						element={
							<Categories
								menuToggle={menuToggle}
								setMenuToggle={setMenuToggle}
							/>
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
