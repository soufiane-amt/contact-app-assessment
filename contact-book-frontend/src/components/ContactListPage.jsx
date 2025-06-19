import { useState } from "react";
import ContactTable from "./ContactTable";
import SearchField from "./SearchField";

function ContactFormModal({ handleToggleModal }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (
      !formData.phoneNumber ||
      (formData.phoneNumber &&
        !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phoneNumber))
    ) {
      newErrors.phoneNumber = "Phone number is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTyping = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true)
      console.log(formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
      });
    } else console.log("Error!");
  };

  return (
    <div
      className="fixed inset-0 bg-black  flex justify-center items-center z-2 p-4 "
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
    >
      <div className="bg-white rounded-4xl shadow-xl w-full max-w-md p-6 sm:p-8 relative transform transition-all sm:my-8 sm:align-middle">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Contact
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleTyping}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#5c4d95] focus:border-[#5c4d95] sm:text-sm`}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleTyping}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#5c4d95] focus:border-[#5c4d95] sm:text-sm `}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleTyping}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#5c4d95] focus:border-[#5c4d95] sm:text-sm`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleTyping}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#5c4d95] focus:border-[#5c4d95] sm:text-sm`}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={handleToggleModal}
              disabled={isLoading} // Disable cancel button during loading
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c4d95]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading} // Disable submit button during loading
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5c4d95] hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c4d95]"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Adding...
                </span>
              ) : (
                "Add Contact"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContactListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="relative">
        <div className="bg-[#5c4d95] h-40 ">
          <div className="flex items-center gap-1 absolute top-9 left-4">
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-200"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.0508 6H9.00005C10.1046 6 11 6.89543 11 8C11 9.10457 10.1046 10 9.00005 10H7.00005V11H9.00005C10.1046 11 11 11.8954 11 13C11 14.1046 10.1046 15 9.00005 15H7.00005V16H9.00005C10.1046 16 11 16.8954 11 18C11 19.1046 10.1046 20 9.00005 20H7.29248C7.36869 20.1568 7.46475 20.2931 7.58584 20.4142C8.17162 21 9.11443 21 11 21H16C17.8857 21 18.8285 21 19.4143 20.4142C20 19.8284 20 18.8856 20 17V8C20 6.11438 20 5.17157 19.4143 4.58579C18.8285 4 17.8857 4 16 4H11C9.11443 4 8.17162 4 7.58584 4.58579C7.25924 4.91238 7.11474 5.34994 7.0508 6ZM16 11C15.4477 11 15 10.5523 15 10V8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8V10C17 10.5523 16.5523 11 16 11ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7H5ZM5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H5ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H9C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17H5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="hidden lg:flex">
              <p className="text-gray-200 font-medium text-lg">Contacts</p>
            </div>
          </div>
          <div className="absolute top-7 right-4 w-4/5 sm:w-2/3 md:w-5/6">
            <SearchField />
          </div>
          <div className="absolute top-20 md:right-4 right-0 w-5/5 md:w-5/6 ">
            <ContactTable />
          </div>
        </div>
        <div>
          <div className="mt-5 md:ml-5 md:static fixed bottom-4 left-[45%]">
            <button
              className=" bg-[#5c4d95] text-white w-20 h-20 rounded-full text-4xl
             flex items-center justify-center
               shadow-xl outline-none cursor-pointer hover:bg-violet-900 transition-colors duration-200 ease-in-out"
              onClick={handleToggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24px"
                height="24px"
                className="color-white"
              >
                <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        {isModalOpen && (
          <ContactFormModal handleToggleModal={handleToggleModal} />
        )}
      </div>
    </div>
  );
}
