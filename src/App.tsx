import { Routes, Route } from "react-router";
import AuthPage from "./pages/authPage";
import CollapsibleSidebar from "./pages/mainPage";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<CollapsibleSidebar />} />
      </Routes>
    </>
  );
}
