import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import UserListHead from '../components/UserListHeads/UserListHead';
import UserListTable from '../components/UserListTables/UserListTable';

function UserListPage() {
  const [users, setUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const response = await axios.get('http://localhost:3800/users');
      console.log(response.data.data);
      setUsers(response.data.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setUsers([]);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <Layout>
      <UserListHead />
      <UserListTable users={users} />
    </Layout>
  );
}

export default UserListPage;
