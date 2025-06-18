const contacts = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Anytown',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '098-765-4321',
    address: '456 Oak Ave, Somewhere',
  },
  {
    id: 3,
    firstName: 'Peter',
    lastName: 'Jones',
    email: 'peter.j@example.com',
    phoneNumber: '098-765-4321', 
    address: '789 Pine Ln, Nowhere',
  },
];


export default function ContactTable() {
  return (
    <div className="shadow-lg rounded-lg p-4 bg-white">
      <table className="w-full">
        <thead className="bg-gray-50 flex !justify-between border-b border-gray-300">
          <th scope="col" className="px-4 py-2 text-sm ">
            {" "}
            First Name
          </th>
          <th scope="col" className="px-4 py-2 text-sm ">
            {" "}
            Last Name
          </th>
          <th scope="col" className="px-4 py-2 text-sm ">
            {" "}
            Email
          </th>
          <th scope="col" className="px-4 py-2 text-sm ">
            {" "}
            Phone Number
          </th>
          <th scope="col" className="px-4 py-2 text-sm ">
            {" "}
            Actions
          </th>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact.id}
              className="hover:bg-blue-50 transition duration-150 ease-in-out flex "
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {contact.firstName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {contact.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                {contact.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {contact.phoneNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {contact.address}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
