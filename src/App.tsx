import { Routes, Route } from "react-router";
import AuthPage from "./pages/authPage";
import CollapsibleSidebar from "./pages/mainPage";
import TicketPage from "./pages/ticketsPage";
import DashboardPage from "./pages/dashboard";
import SettingsPage from "./pages/settings";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<CollapsibleSidebar />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}
