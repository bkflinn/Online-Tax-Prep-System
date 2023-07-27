import CreateAccount from "./pages/CreateAccount";
import LoginPage from "./pages/LoginPage";
import PersonalInfo from "./pages/PersonalInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
    <Routes>
      {/* Default route to LoginPage */}
      <Route path="/" element={<LoginPage />} />

      {/* Other routes */}
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/personal-info" element={<PersonalInfo />} />
    </Routes>
  </Router>
  );
}
