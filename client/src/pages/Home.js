import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to VVIT College Event Management</h1>
      <nav>
        <ul>
          <li><Link to="/users">View Users</Link></li>
          <li><Link to="/events">View Events</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
