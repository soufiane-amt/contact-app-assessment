import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./ContactListPage";
import { useNavigate, useParams } from "react-router-dom";

export default function ContactFormModal() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        try {
          const res = await axios.get(`${API_BASE_URL}/${id}`);
          setFormData(res.data);
        } catch (error) {
          console.error("Failed to add contact:", error);
          setShowErrorModal(true);
        }
      };
      fetchContact();
    }
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      try {
        await axios.post(API_BASE_URL, formData);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        });
        setIsLoading(false);
        navigateHome();
      } catch (error) {
        console.error("Failed to add contact:", error);
        setShowErrorModal(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="fixed inset-0 bg-white  flex justify-center items-center z-2 p-4 ">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 md:min-w-2/3 min-w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {id ? "Update Contact" : "Add New Contact"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="md:flex md:gap-x-4">
            <div className="md:flex-1 mb-3 md:mb-0">
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
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 border rounded-md shadow-sm focus:outline-none focus:ring-[#5c4d95] focus:border-[#5c4d95] sm:text-sm`}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div className="md:flex-1">
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
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5c4d95] focus:border-[#5c4d95] sm:text-sm `}
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
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
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5c4d95] focus:border-[#5c4d95] sm:text-sm`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="mt-4">
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
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5c4d95] focus:border-[#5c4d95] sm:text-sm`}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={navigateHome}
              disabled={isLoading}
              className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c4d95]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5c4d95] hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c4d95]"
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
                  {id ? "Updating..." : "Adding..."}
                </span>
              ) : id ? (
                "Update contact"
              ) : (
                "Add contact"
              )}
            </button>
          </div>
        </form>
      </div>
      {showErrorModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h3 className="text-xl font-bold text-red-600 mb-4">Error!</h3>
            <p className="text-gray-700 mb-6">
              Failed to add contact. Please try again.
            </p>
            <button
              onClick={closeErrorModal}
              className="px-4 py-2 bg-[#5c4d95] text-white rounded-md hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5c4d95]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
