export default function SearchField() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      <div>
        <input
          className="w-full md:h-13 h-10 px-13 rounded-4xl  bg-[#9595c5] text-gray-50 outline-none"
          type="text"
          placeholder="Search contacts"
        />
      </div>
    </div>
  );
}
