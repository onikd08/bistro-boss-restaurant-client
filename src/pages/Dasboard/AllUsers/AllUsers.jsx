import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import showSuccess from "../../../utilities/showSuccess";
import showError from "../../../utilities/showError";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });

  const handleMakeAdmin = (userId) => {
    axiosSecure
      .patch(`/users/admin/${userId}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          showSuccess("Well Done", "User has been given admin role");
        }
      })
      .catch((err) => showError(err));
  };

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this user",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((response) => {
            if (response.data.deletedCount === 1) {
              showSuccess("Deleted!", "User has been deleted");
              refetch();
            }
          })
          .catch((err) => {
            showError(err.message);
          });
      }
    });
  };

  return (
    <div>
      <section>
        <div className="text-black">
          <SectionTitle
            heading={"How many??"}
            subHeading={"Manage All Users"}
          ></SectionTitle>
        </div>
        <div className="w-3/4 mx-auto  bg-white pb-10 mb-10">
          <div className="text-black flex justify-between m-12 font-semibold items-center pt-12">
            <h2 className="text-2xl uppercase">Total Users: {users.length}</h2>
          </div>

          <div className="overflow-x-auto mx-10 rounded-2xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-white uppercase">
                <tr className="font-semibold text-lg">
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user?.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn bg-[#D1A054] border-0 text-white text-xl"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <th>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="btn border-0 bg-red-700"
                      >
                        <RiDeleteBinLine className="text-white text-2xl " />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUsers;
