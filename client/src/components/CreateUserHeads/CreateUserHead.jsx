import { Container } from './CreateUserHead.styled';
import { useNavigate } from 'react-router-dom';

function CreateUserHead() {
  const navigateTo = useNavigate();
  const handleOnClick = () => {
    navigateTo('/create-user');
  };

  return (
    <Container>
      <h1>Create New User</h1>
      <button onClick={handleOnClick}>Add +</button>
    </Container>
  );
}

export default CreateUserHead;
