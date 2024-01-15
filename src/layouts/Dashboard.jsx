import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaShoppingBag,
  FaEnvelope,
  FaUtensils,
  FaList,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdRateReview } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-1/5 bg-[#D1A054] min-h-screen text-black uppercase">
        <div className="uppercase text-center text-3xl my-10">
          <h3 className="font-bold">Bistro Boss</h3>
          <h3 className="tracking-wide">Restaurant</h3>
        </div>
        <ul className="menu tracking-wide">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome className="text-2xl" />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils className="text-2xl" />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList className="text-2xl" />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook className="text-2xl" />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers className="text-2xl" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome className="text-2xl" />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <SlCalender className="text-2xl" />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaWallet className="text-2xl" />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <MdRateReview className=" text-2xl" />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/myBooking"}>
                  <BsCalendar2DateFill className=" text-2xl" />
                  My Booking
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaHome className="text-2xl" />
                  My Cart ({cart.length})
                </NavLink>
              </li>
            </>
          )}
          <hr className="my-10 w-4/5 mx-auto" />
          {/* Shared navLinks */}
          <li>
            <NavLink to={"/"}>
              <FaHome className="text-2xl" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <IoMenu className="text-2xl" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaShoppingBag className=" text-2xl" />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FaEnvelope className=" text-2xl" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="w-4/5 bg-slate-200 min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
