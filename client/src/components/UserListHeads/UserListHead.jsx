import { Container } from './UserListHead.styled';
import { useNavigate } from 'react-router-dom';

function UserListHead() {
  const navigateTo = useNavigate();

  const handleOnClick = () => {
    navigateTo('/create-user');
  };

  return (
    <Container>
      <h1>User List</h1>
      <button onClick={handleOnClick}>Add +</button>
    </Container>
  );
}

export default UserListHead;
