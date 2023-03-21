import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card";

export default function Home({ events, getData, error, loading, deleteEvent }) {
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mx-auto mt-4">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {events.map((item) => {
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        location={item.location}
                        category={item.category}
                        timing={item.timing}
                        createdAt={item.createdAt}
                        deleteEvent={deleteEvent}
                    />
                );
            })}
        </div>
    );
}
