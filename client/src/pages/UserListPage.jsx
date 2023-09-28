import Layout from '../layouts/Layout';
import UserListHead from '../components/UserListHeads/UserListHead';
import UserListTable from '../components/UserListTables/UserListTable';

function UserListPage() {
  return (
    <Layout>
      <UserListHead />
      <UserListTable />
    </Layout>
  );
}

export default UserListPage;
