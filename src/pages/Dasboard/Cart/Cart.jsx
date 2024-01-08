import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import CartRow from "./CartRow";

const Cart = () => {
  const [cart] = useCart();
  const calculateTotalPrice = (accumulator, currentValue) =>
    accumulator + currentValue.price;

  return (
    <section>
      <div className="text-black">
        <SectionTitle
          heading={"Wanna add more?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="w-3/4 mx-auto  bg-white">
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
