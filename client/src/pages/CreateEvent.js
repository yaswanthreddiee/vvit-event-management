import React, { useState } from 'react';
import { createEvent } from '../services/api';

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createEvent(eventData);
        alert('Event Created!');
        setEventData({ name: '', date: '', location: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Event Name" onChange={handleChange} required />
            <input type="date" name="date" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} required />
            <button type="submit">Create Event</button>
        </form>
    );
};

export default CreateEvent;
