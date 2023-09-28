import Layout from '../layouts/Layout';
import CreateUserHead from '../components/CreateUserHeads/CreateUserHead';
import CreateUserForm from '../components/CreateuserForms/CreateUserForm';

function CreateNewUserPage() {
  return (
    <Layout>
      <CreateUserHead />
      <CreateUserForm />
    </Layout>
  );
}

export default CreateNewUserPage;
