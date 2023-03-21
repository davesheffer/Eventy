import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AddEvent from "./components/AddEvent/AddEvent";
import classNames from "classnames";
import Home from "./pages/Home";
import Users from "./pages/Users";

import { Routes, Route } from "react-router-dom";
function App() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [menuToggle, setMenuToggle] = useState(false);

    const menuToggleClasses = classNames(
        "p-4",
        "h-screen",
        "absolute",
        "bg-gray-600",
        "transition-all",
        "z-10",
        "opacity-0",
        "transition-all",

        {
            "bg-gray-600": menuToggle,
            "opacity-90": menuToggle,
            "w-full": menuToggle,
            "w-0": !menuToggle
        }
    );

    function getData() {
        fetch("http://localhost:8000/events")
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
            method: "DELETE"
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
        <div className="App relative">
            <Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
            <AddEvent
                setEvents={setEvents}
                events={events}
                setMenuToggle={setMenuToggle}
                menuToggle={menuToggle}
            />
            <div className={menuToggleClasses}></div>
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
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
                    <Route path="/users" element={<Users />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
