import { useCallback, useEffect, useState } from "react";
import ContactTable from "../components/ContactTable/ContactTable";
import SearchField from "../components/SearchField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const API_BASE_URL = "http://localhost:8080/api/contacts";

export default function ContactHomePage() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const fetchContacts = useCallback(() => {
    axios.get(API_BASE_URL).then((response) => {
      setContacts(response.data);
    });
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleToggleModal = () => {
    navigate("/contact");
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
            <SearchField setContacts={setContacts}/>
          </div>
          <div className="absolute top-20 md:right-4 right-0 w-5/5 md:w-5/6 ">
            <ContactTable contacts={contacts} fetchContacts={fetchContacts} />
          </div>
        </div>
        <div>
          <div className="md:mt-5 md:ml-5 md:static md:left-[45%] md:translate-x-0 fixed bottom-0 left-1/2 -translate-x-1/2 p-4">
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
    </div>
  );
}
