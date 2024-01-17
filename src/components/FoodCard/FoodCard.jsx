import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import showSuccess from "../../utilities/showSuccess";
import showError from "../../utilities/showError";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (!user) {
      Swal.fire({
        title: "Please Login",
        text: "You need to login to place your order.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
      return;
    }

    const cartItem = {
      menuItemId: _id,
      email: user.email,
      name,
      image,
      price,
    };
    axiosSecure
      .post("/carts", cartItem)
      .then((response) => {
        if (response.data.insertedId) {
          showSuccess("Well Done!", `${name} is added`);
          refetch();
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className="rounded-xl w-full h-[250px]" />
      </figure>
      <p className="text-white bg-slate-950 absolute right-4 top-4 px-6 py-3">
        {price}$
      </p>
      <div className="card-body items-center text-justify">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 border-yellow-500 text-yellow-500 mt-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
