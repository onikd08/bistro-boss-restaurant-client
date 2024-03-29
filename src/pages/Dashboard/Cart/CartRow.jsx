import { RiDeleteBinLine } from "react-icons/ri";

const CartRow = ({ cartItem, itemCount, deleteItem }) => {
  const { price, image, name, _id } = cartItem;
  return (
    <tr>
      <th>{itemCount}</th>
      <td>
        <img src={image} alt="Item Image" className="w-20 h-20" />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <th>
        <button
          onClick={() => deleteItem(_id)}
          className="btn border-0 bg-red-700"
        >
          <RiDeleteBinLine className="text-white text-2xl " />
        </button>
      </th>
    </tr>
  );
};

export default CartRow;
