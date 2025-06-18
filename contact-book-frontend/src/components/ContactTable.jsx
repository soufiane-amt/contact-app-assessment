import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Anytown",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "098-765-4321",
    address: "456 Oak Ave, Somewhere",
  },
  {
    id: 3,
    firstName: "Peter",
    lastName: "Jones",
    email: "peter.j@example.com",
    phoneNumber: "098-765-4321",
    address: "789 Pine Ln, Nowhere",
  },
];

function ContactActions() {
  const [isInView, setInview] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (isInView && menuRef.current && !menuRef.current.contains(event.target))
            setInview(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [isInView]);

  return (
    <div className="relative">
      <button
        className="cursor-pointer"
        onClick={() => {
          setInview((prevInview) => !prevInview);
        }}
      >
        <svg
          className="w-3 h-4 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4z"></path>
        </svg>
      </button>
      {isInView && (
        <div ref={menuRef} className="absolute right-2 mt-2 w-20 bg-white rounded-sm shadow-lg z-1  focus:outline-none">
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 rounded-t-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => console.log("Edit clicked!")} 
          >
            Edit
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150 rounded-b-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => console.log("Delete clicked!")}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function ContactTable() {
  return (
    <div className="shadow-lg rounded-lg p-4 bg-white">
      <table className="w-full">
        <thead className="bg-gray-50  border-b border-gray-300 text-left">
          <th scope="col" className="px-4 py-2 text-sm ">
            First Name
          </th>
          <th scope="col" className="px-4 py-2 text-sm ">
            Last Name
          </th>
          <th scope="col" className="px-4 py-2 text-sm ">
            Email
          </th>
          <th scope="col" className="px-4 py-2 text-sm ">
            Phone Number
          </th>
          <th scope="col" className="px-4 py-2 text-sm ">
            Actions
          </th>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact.id}
              className="hover:bg-blue-50 transition duration-600 ease-in-out  border-b border-gray-300 text-left"
            >
              <td className="h-5 px-4 py-3 text-sm">{contact.firstName}</td>
              <td className="h-5 px-4 py-3 text-sm">{contact.lastName}</td>
              <td className="h-5 px-4 py-3 text-sm">{contact.email}</td>
              <td className="h-5 px-4 py-3 text-sm">{contact.phoneNumber}</td>
              <td className="h-5 px-6 py-3 whitespace-nowrap text-center  font-medium">
                <ContactActions />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
