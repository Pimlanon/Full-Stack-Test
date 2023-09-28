import { HeadNav } from './NavBar.styled';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigateTo = useNavigate();

  const handleOnClick = () => {
    navigateTo('/users');
  };

  return (
    <HeadNav>
      <div onClick={handleOnClick}>
        <h1>User Management</h1>
      </div>

      <img alt="user-img"></img>
    </HeadNav>
  );
}

export default NavBar;
