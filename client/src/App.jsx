import { Routes, Route, Navigate } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import CreateNewUserPage from './pages/CreateNewUserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" replace />} />
      <Route path="/users" element={<UserListPage />} />
      <Route path="/create-user" element={<CreateNewUserPage />} />
    </Routes>
  );
}

export default App;
