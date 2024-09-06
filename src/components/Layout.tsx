import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <main className="lg:flex lg:gap-[5rem]">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
