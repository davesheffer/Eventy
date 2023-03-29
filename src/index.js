import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GlobalProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalProvider>
    </React.StrictMode>
);
