import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import showSuccess from "../../../utilities/showSuccess";
import showError from "../../../utilities/showError";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        showSuccess("Logout Successful", "See you soon!!!");
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>
      <li>
        <Link to={"/private"}>Private</Link>
      </li>

      <div className="dropdown dropdown-end  rounded-full">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <GiShoppingCart className="text-2xl -mt-2" />
            <span className="badge badge-sm indicator-item -mt-2">8</span>
          </div>
        </div>
        <div
          tabIndex={0}
          className=" z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>

      <li>
        {user && !loading ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-opacity-50 bg-black fixed z-10 max-w-screen-xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl block uppercase">
          Bistro Boss<span className="block font-normal">Restaurant</span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div>
          {user?.displayName && (
            <div className="-mt-2">
              <img className="w-8 rounded-full" src={user.photoURL} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
