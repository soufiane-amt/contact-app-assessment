import { useState } from "react";
import ContactActions from "./ContactActions";

export default function ContactRow({ contact, fetchContacts }) {
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
          <ContactActions itemId={contact.id} fetchContacts={fetchContacts}/>
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
