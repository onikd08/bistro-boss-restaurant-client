import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={MenuImg}
        title="Our Menu"
        description="Would you like to try a dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={MenuImg}
        title="Our Menu"
        description="Would you like to try a dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={MenuImg}
        title="Our Menu"
        description="Would you like to try a dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <h1>This is Menu</h1>
    </div>
  );
};

export default Menu;
