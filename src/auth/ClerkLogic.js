import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignIn,
    SignUp,
    RedirectToSignIn,
} from '@clerk/clerk-react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Events from '../components/Events/Events';
import Users from '../components/Users/Users';
import Locations from '../components/Locations/Locations';
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Navbar/Navbar';
const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const ClerkLogic = () => {
    const navigate = useNavigate();
    return (
        <ClerkProvider
            publishableKey={clerk_pub_key}
            navigate={to => navigate(to)}
        >
            <div className="App h-screen">
                <SignedOut>
                    <RedirectToSignIn />
                </SignedOut>
                <SignedIn>
                    <Navbar />
                </SignedIn>
                <main className="h-[600px]">
                    <Routes>
                        <Route
                            path="/sign-in/*"
                            element={<SignIn routing="path" path="/sign-in" />}
                        />
                        <Route
                            path="/sign-up/*"
                            element={<SignUp routing="path" path="/sign-up" />}
                        />
                        <Route
                            path="/"
                            element={
                                <SignedIn>
                                    <Events />
                                </SignedIn>
                            }
                        />
                        <Route
                            path="/users"
                            element={
                                <SignedIn>
                                    <Users />
                                </SignedIn>
                            }
                        />
                        <Route
                            path="/locations"
                            element={
                                <SignedIn>
                                    <Locations />
                                </SignedIn>
                            }
                        />
                        <Route
                            path="/categories"
                            element={
                                <SignedIn>
                                    <Categories />
                                </SignedIn>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </ClerkProvider>
    );
};

export default ClerkLogic;
