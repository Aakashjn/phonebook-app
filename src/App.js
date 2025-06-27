// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import ViewContacts from './pages/ViewContacts';
import ContactDetails from './pages/ContactDetails';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">PhoneBook App</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/add" className="hover:underline">Add Contact</Link>
            <Link to="/view" className="hover:underline">View Contacts</Link>
          </div>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/view" element={<ViewContacts />} />
            <Route path="/view/:id" element={<ContactDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
