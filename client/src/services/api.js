import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api'; // Ensure this matches your backend server port

// ✅ Fetch all events
export const getEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        return response.data;
    } catch (error) {
        console.error('❌ Error fetching events:', error.response?.data || error.message);
        return [];
    }
};

// ✅ Create a new event
export const createEvent = async (eventData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/events`, eventData, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error.response?.data || error.message);
        return null;
    
    
    }
};

// ✅ Get a single event by ID
export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events/${id}`);
        return response.data;
    } catch (error) {
        console.error(`❌ Error fetching event ID ${id}:`, error.response?.data || error.message);
        return null;
    }
};

// ✅ Update an event by ID
export const updateEvent = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/events/${id}`, updatedData, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.error(`❌ Error updating event ID ${id}:`, error.response?.data || error.message);
        return null;
    }
};

// ✅ Delete an event by ID
export const deleteEvent = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/events/${id}`);
        return true;
    } catch (error) {
        console.error(`❌ Error deleting event ID ${id}:`, error.response?.data || error.message);
        return false;
    }
};
