import "./App.css";
import ContactFormPage from "./pages/ContactFormPage";
import ContactHomePage from "./pages/ContactHomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactHomePage />} />
        <Route path="/contact" element={<ContactFormPage />} />
        <Route path="/contact/:id" element={<ContactFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
