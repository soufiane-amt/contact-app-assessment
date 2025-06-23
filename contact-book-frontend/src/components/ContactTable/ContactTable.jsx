import ContactRow from "./ContactRow";

export default function ContactTable({ contacts, fetchContacts }) {
  return (
    <div className="shadow-lg rounded-md bg-white mt-5 md:w-full overflow-hidden z-[50]">
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
                <ContactRow key={contact.id} contact={contact} fetchContacts={fetchContacts}/>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
