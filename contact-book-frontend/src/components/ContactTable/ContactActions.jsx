import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../pages/ContactHomePage";

export default function ContactActions({ itemId, fetchContacts }) {
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

  const handleUpdateItem = async () => {
    navigate(`/contact/${itemId}`);
  };

  const handleDeleteItem = async () => {
    await axios.delete(`${API_BASE_URL}/${itemId}`);
    fetchContacts();
};

  return (
    <div className="relative right-5 md:right-15">
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
          className="absolute md:left-15 bottom-2 mt-2 w-20 bg-white rounded-sm shadow-lg z-1  outline-none"
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
