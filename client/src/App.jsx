import { Routes, Route, Navigate } from "react-router-dom";
import UserListPage from "./pages/UserListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/users" element={<UserListPage />} />
    </Routes>
  );
}

export default App;
