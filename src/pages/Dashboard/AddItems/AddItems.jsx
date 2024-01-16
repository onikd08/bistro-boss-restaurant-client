import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="text-black">
      <SectionTitle
        heading={"Add an Item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div className="w-3/4 mx-auto">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className="text-gray-700 dark:text-gray-200">
                Recipe Name*
              </label>
              <input
                {...register("name")}
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex justify-between items-center gap-20 mb-5">
              <div className="flex-1">
                <label className="text-gray-700 dark:text-gray-200">
                  Category*
                </label>
                <select
                  {...register("category")}
                  defaultValue="default"
                  required
                  className="cursor-pointer block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option disabled value="default">
                    Select Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="desert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="text-gray-700 dark:text-gray-200">
                  Price*
                </label>
                <input
                  {...register("price")}
                  required
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Recipe Details*
              </label>
              <textarea
                {...register("recipe")}
                required
                type="text"
                className="block min-h-[120px] w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                {...register("image")}
                className="mt-5 text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300"
                type="file"
              />
            </div>

            <div className="mt-10">
              <button className="btn bg-[#D1A054] text-white">
                Add Item
                <FaUtensils />
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddItems;
