import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const isLocationLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="max-w-screen-xl mx-auto">
      {isLocationLogin || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLocationLogin || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
