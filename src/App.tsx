import { Routes, Route } from "react-router";
import AuthPage from "./pages/authPage";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </>
  );
}
