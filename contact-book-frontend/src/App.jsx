import "./App.css";
import ContactFormModal from "./components/ContactFormModal";
import ContactListPage from "./components/ContactListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactListPage />} />
        <Route path="/contact" element={<ContactFormModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
