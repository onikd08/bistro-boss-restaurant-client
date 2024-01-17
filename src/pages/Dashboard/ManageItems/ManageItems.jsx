import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import showSuccess from "../../../utilities/showSuccess";
import showError from "../../../utilities/showError";
import Loading from "../../Shared/Loading/Loading";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this item",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/menu/${id}`)
          .then((response) => {
            if (response.data.deletedCount === 1) {
              refetch();
              showSuccess("Deleted!", "Item has been deleted");
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
            heading={"Manage All Items"}
            subHeading={"Hurry up!!!"}
          ></SectionTitle>
        </div>
        <div className="w-3/4 mx-auto  bg-white pb-10 mb-10">
          <div className="text-black flex justify-between m-12 font-semibold items-center pt-12">
            <h2 className="text-2xl uppercase">Total Items: {menu.length}</h2>
          </div>

          {loading && <Loading></Loading>}
          {menu.length && (
            <div className="overflow-x-auto mx-10 rounded-2xl">
              <table className="table">
                {/* head */}
                <thead className="bg-[#D1A054] text-white uppercase">
                  <tr className="font-semibold text-lg">
                    <th>#</th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.map((item, idx) => (
                    <tr key={item._id}>
                      <th>{idx + 1}</th>
                      <td>
                        <img
                          className="w-24 h-16"
                          src={item.image}
                          alt="Item Image"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>
                        <button className="btn bg-[#D1A054] border-0 text-white text-xl">
                          <FaEdit />
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteItem(item._id)}
                          className="btn border-0 bg-red-700"
                        >
                          <RiDeleteBinLine className="text-white text-2xl " />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ManageItems;
