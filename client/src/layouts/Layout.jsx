import NavBar from "./Nav/NavBar";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
