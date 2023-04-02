import './App.css';

import { GlobalProvider } from './context/GlobalContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import ClerkLogic from './auth/ClerkLogic';

function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalProvider>
                <BrowserRouter>
                    <ClerkLogic />
                </BrowserRouter>
            </GlobalProvider>
        </QueryClientProvider>
    );
}

export default App;
