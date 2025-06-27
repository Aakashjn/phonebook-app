import React from "react";
import { Link } from "react-router-dom";

const ViewContacts = ({ contacts }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contact List</h2>
      {contacts && contacts.length > 0 ? (
        contacts.map((contact) => (
          <div key={contact.id} className="mb-4 border p-3 rounded shadow">
            <p className="text-lg font-semibold">{contact.name}</p>
            <p className="text-gray-600">{contact.email}</p>
            <div className="mt-2">
              <Link
                to={`/view/${contact.id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ViewContacts;
