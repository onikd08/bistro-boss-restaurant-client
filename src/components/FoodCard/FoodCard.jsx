const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <p className="text-white bg-slate-950 absolute right-4 top-4 px-6 py-3">
        {price}$
      </p>
      <div className="card-body items-center text-justify">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 border-yellow-500 text-yellow-500 mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
