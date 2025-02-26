import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Events from './pages/Events';
import CreateEvent from './pages/CreateEvent';

const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">Create Event</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Events />} />
                <Route path="/create" element={<CreateEvent />} />
            </Routes>
        </>
    );
};

export default App;
