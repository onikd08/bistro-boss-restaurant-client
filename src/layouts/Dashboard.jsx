import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/3 bg-[#D1A054] min-h-screen text-white">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>User Home</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>Reservation</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/paymentHistory"}>Payment History</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>Add Review</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/myBooking"}>My Booking</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>My Cart</NavLink>
          </li>
        </ul>
      </div>

      <div className="w-2/3 bg-slate-200 min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
