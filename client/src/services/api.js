import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
};

export const createEvent = async (eventData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/events`, eventData);
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        return null;
    }
};
