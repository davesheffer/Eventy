import './App.css';
import Navbar from './components/Navbar/Navbar';
import Events from './pages/Events';
import Users from './pages/Users';
import Locations from './pages/Locations';
import Categories from './pages/Categories';
import GlobalProvider from './context/GlobalContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
    ClerkProvider,
    SignedIn,
    SignIn,
    SignUp
  } from "@clerk/clerk-react";
  import {
    BrowserRouter,
    Route,
    Routes,
    useNavigate
  } from "react-router-dom";

const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;



function App() {
    const navigate = useNavigate()
    const queryClient = new QueryClient();
    return (
     
            <QueryClientProvider client={queryClient} >
                    <GlobalProvider>
                    <BrowserRouter>
                    <ClerkProvider 
        publishableKey={clerk_pub_key} 
        navigate={(to) => navigate(to)}
       >
                        <div className="App relative">
                        <Navbar />
                        <main>
                        <Routes>
                                    <Route path="/" element={ <SignedIn><Events /></SignedIn>} />
                                    <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
            <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
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
                    </ClerkProvider>
                    </BrowserRouter>
                </GlobalProvider>
            </QueryClientProvider>
       

    );
}

export default App;
