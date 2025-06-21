import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./ContactListPage";
import { useNavigate } from "react-router-dom";


function ContactActions({itemId}) {
  const [isActionInView, setActionInView] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isActionInView &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      )
        setActionInView(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [isActionInView]);

  const handleUpdateItem = async () =>{
        navigate(`/contact/${itemId}`)
  }

  const handleDeleteItem = async () =>{
        await axios.delete(`${API_BASE_URL}/${itemId}`)
  }

  return (
    <div className="relative right-5 ">
      <button
        className="cursor-pointer"
        onClick={() => {
          setActionInView((prevInview) => !prevInview);
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
      {isActionInView && (
        <div
          ref={menuRef}
          className="absolute left-15 bottom-2 mt-2 w-20 bg-white rounded-sm shadow-lg z-1  outline-none"
        >
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 rounded-t-md outline-none "
            onClick={handleUpdateItem}
          >
            Edit
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 rounded-t-md outline-none "
            onClick={handleDeleteItem}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

function ContactRow({ contact }) {
  const [isRowExpanded, setIsRowExpanded] = useState(false);

  return (
    <>
      <tr
        key={contact.id}
        className={`hover:bg-blue-50 transition duration-600 ease-in-out  border-b border-gray-300 text-left ${contact.id % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
      >
        <td className="w-1 h-1">
          <button
            onClick={() => setIsRowExpanded((prev) => !prev)}
            className="rounded-full outline-none md:hidden"
            aria-expanded={isRowExpanded}
            aria-controls={`contact-details-${contact.id}`}
            title={isRowExpanded ? "Collapse details" : "Expand details"}
          >
            <svg
              className={`w-3 h-3text-gray-600 transform ${
                isRowExpanded ? "rotate-90" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </td>
        <td className="h-5 px-4 py-3 text-sm">{contact.firstName}</td>
        <td className="h-5 px-4 py-3 text-sm">{contact.lastName}</td>
        <td className={`hidden md:table-cell h-5 px-4 py-3 text-sm  `}>
          {contact.email}
        </td>
        <td className="hidden md:table-cell h-5 px-4 py-3 text-sm">
          {contact.phoneNumber}
        </td>
        <td className=" h-5 px-6 py-3 whitespace-nowrap text-center  font-medium">
          <ContactActions itemId={contact.id} />
        </td>
      </tr>
      {isRowExpanded && (
        <tr className="md:hidden">
          <td
            colSpan="7"
            className="px-6 py-4 bg-gray-50 border-t border-gray-200"
          >
            <div
              id={`contact-details-${contact.id}`}
              className="space-y-2 text-sm text-gray-700 "
            >
              <p className="text-[#67758c] font-medium flex justify-between">
                <strong>Email:</strong>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:underline justify-end"
                >
                  {contact.email}
                </a>
              </p>
              <p className="text-[#67758c] font-medium flex  justify-between">
                <strong>Phone:</strong> {contact.phoneNumber}
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default function ContactTable({contacts}) {
  return (
    <div className="shadow-lg rounded-md bg-white mt-5 md:w-full overflow-hidden">
      <div className="max-h-[550px] overflow-y-auto w-full custom-scrollbar p-4">
        <table className="w-full">
          <thead className="border-b border-gray-300 text-left">
            <tr>
              <th scope="col" className="px-4 py-2 text-sm"></th>
              <th scope="col" className="px-4 py-2 text-sm">
                First Name
              </th>
              <th scope="col" className="px-4 py-2 text-sm">
                Last Name
              </th>
              <th
                scope="col"
                className="hidden md:table-cell px-4 py-2 text-sm"
              >
                Email
              </th>
              <th
                scope="col"
                className="hidden md:table-cell px-4 py-2 text-sm"
              >
                Phone Number
              </th>
              <th
                scope="col"
                className="hidden md:table-cell px-4 py-2 text-sm"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500"
                >
                  No contacts found.
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <ContactRow key={contact.id} contact={contact} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
