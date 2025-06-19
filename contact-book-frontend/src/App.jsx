import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactTable from "./components/ContactTable";
import SearchField from "./components/SearchField";
import ContactListPage from "./components/ContactListPage";

function App() {
  return (
    <>
      <ContactListPage/>
      {/* <SearchField/>
      <ContactTable /> */}
    </>
  );
}

export default App;
