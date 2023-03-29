import './App.css';
import Navbar from './components/Navbar/Navbar';
import Events from './pages/Events';
import Users from './pages/Users';
import Locations from './pages/Locations';
import Categories from './pages/Categories';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App relative">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Events />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
