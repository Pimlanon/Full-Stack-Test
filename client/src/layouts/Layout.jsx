import PropTypes from 'prop-types';
import NavBar from './Nav/NavBar';

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
