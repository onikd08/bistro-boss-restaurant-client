import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="p-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={`/order/${title}`}
          className="btn btn-outline border-0 border-b-4 border-white text-white mt-4"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
