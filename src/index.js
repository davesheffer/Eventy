import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <GlobalProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GlobalProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
