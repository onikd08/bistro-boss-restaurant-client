import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
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
      <SectionTitle
        heading="Today's Offer"
        subHeading="Don't miss"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title="Deserts"
        coverImg={desertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title="Pizzas"
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title="Salads"
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title="Soups"
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
