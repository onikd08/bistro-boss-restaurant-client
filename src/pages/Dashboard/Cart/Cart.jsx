import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CartRow from "./CartRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import showSuccess from "../../../utilities/showSuccess";
import showError from "../../../utilities/showError";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const calculateTotalPrice = (accumulator, currentValue) =>
    accumulator + currentValue.price;

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((response) => {
            if (response.data.deletedCount === 1) {
              showSuccess("Deleted!", "Item has been deleted");
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
    <section>
      <div className="text-black">
        <SectionTitle
          heading={"Wanna add more?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="w-3/4 mx-auto  bg-white pb-10 mb-10">
        <div className="text-black flex justify-between m-12 font-semibold items-center pt-12">
          <h2 className="text-2xl uppercase">Total Orders: {cart.length}</h2>
          <h2 className="text-2xl uppercase">
            Total Price: $ {cart.reduce(calculateTotalPrice, 0)}
          </h2>
          <button className="bg-[#D1A054] btn text-white border-0">PAY</button>
        </div>

        <div className="overflow-x-auto mx-10 rounded-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white uppercase">
              <tr className="font-semibold text-lg">
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <CartRow
                  key={item._id}
                  cartItem={item}
                  itemCount={idx + 1}
                  deleteItem={handleDeleteItem}
                ></CartRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cart;
