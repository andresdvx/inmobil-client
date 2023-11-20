import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full h-12 flex justify-between items-center z-50|| sm:h-[100vh] sm:w-20 sm:left-0 sm:flex-col || lg:border-r-1 lg:w-[180px]">
     <NavItems/>
    </nav>
  );
};

export default NavBar;
