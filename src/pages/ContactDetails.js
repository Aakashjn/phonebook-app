// pages/ContactDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('contacts')) || [];
    const match = stored.find(c => c.id === id);
    if (match) setContact(match);
    else navigate('/view');
  }, [id, navigate]);

  if (!contact) return null;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Meeting Note:</strong> {contact.note || 'Not specified'}</p>
      <button
        onClick={() => navigate('/view')}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Contacts
      </button>
    </div>
  );
}
