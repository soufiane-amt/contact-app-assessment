import ContactTable from "./ContactTable";
import SearchField from "./SearchField";

export default function ContactListPage() {
  return (
    <div>
      <div className="bg-[#5c4d95] h-50 relative">
        <div className="absolute top-7 right-4 w-4/5 sm:w-2/3 md:w-5/6">
          <SearchField />
          <ContactTable/>
        </div>
      </div>
    </div>
  );
}
