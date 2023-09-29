import { Routes, Route, Navigate } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import CreateNewUserPage from "./pages/CreateNewUserPage";
import EditUserPage from "./pages/EditUserPage";
import InvalidURLPage from "./pages/InvalidURLPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/users" element={<UserListPage />} />
      <Route path="/users/:id" element={<EditUserPage />} />
      <Route path="/create-user" element={<CreateNewUserPage />} />
      <Route path="/*" element={<InvalidURLPage />} />
    </Routes>
  );
}

export default App;
