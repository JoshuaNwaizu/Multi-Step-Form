import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <main className="lg:flex lg:gap-[5rem]">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
