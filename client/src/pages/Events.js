import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/api';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const data = await getEvents();
            setEvents(data);
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.date} - {event.location}</p>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
