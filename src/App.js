import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Events from './pages/Events';
import Users from './pages/Users';
import Locations from './pages/Locations';
import Categories from './pages/Categories';

import { Routes, Route } from 'react-router-dom';
function App() {

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [menuToggle, setMenuToggle] = useState(false);




	return (
		<div className='App relative'>
			<Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

			<main>
				<Routes>
					<Route
						path='/'
						element={
							<Events
								loading={loading}
								setLoading={setLoading}
								error={error}
								setError={setError}
								menuToggle={menuToggle}
								setMenuToggle={setMenuToggle}
								
							/>
						}
					/>
					<Route
						path='/users'
						element={
							<Users 
							menuToggle={menuToggle} 
							setMenuToggle={setMenuToggle} 	
							loading={loading}
							setLoading={setLoading}
							error={error}
							setError={setError}/>
						}
					/>
					<Route
						path='/locations'
						element={
							<Locations
								menuToggle={menuToggle}
								setMenuToggle={setMenuToggle}
								loading={loading}
								setLoading={setLoading}
								error={error}
								setError={setError}
							/>
						}
					/>
					<Route
						path='/categories'
						element={
							<Categories
								menuToggle={menuToggle}
								setMenuToggle={setMenuToggle}
								loading={loading}
								setLoading={setLoading}
								error={error}
								setError={setError}
							/>
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
