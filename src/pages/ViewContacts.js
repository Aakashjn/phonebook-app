// pages/ViewContacts.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ViewContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(stored);
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul className="space-y-2">
          {contacts.map(contact => (
            <li
              key={contact.id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{contact.name}</p>
                <p className="text-gray-600">{contact.phone}</p>
              </div>
              <Link
                to={/view/${contact.id}}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
