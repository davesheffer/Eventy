import './App.css';
import Navbar from './components/Navbar/Navbar';
import Events from './pages/Events';
import Users from './pages/Users';
import Locations from './pages/Locations';
import Categories from './pages/Categories';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

import { Routes, Route } from 'react-router-dom';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalProvider>
                <BrowserRouter>
                    <div className="App relative">
                        <Navbar />
                        <main>
                            <Routes>
                                <Route path="/" element={<Events />} />
                                <Route path="/users" element={<Users />} />
                                <Route
                                    path="/locations"
                                    element={<Locations />}
                                />
                                <Route
                                    path="/categories"
                                    element={<Categories />}
                                />
                            </Routes>
                        </main>
                    </div>
                </BrowserRouter>
            </GlobalProvider>
        </QueryClientProvider>
    );
}

export default App;
