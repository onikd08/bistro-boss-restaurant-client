import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed ">
      <div className="bg-slate-800 bg-opacity-40 pt-10 ">
        <SectionTitle
          subHeading="Check it out"
          heading="Featured Item"
        ></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10 text-white">
            <p>Aug 20, 2024</p>
            <p className="uppercase">Where can I get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              soluta. Maxime fugit quisquam ratione ullam corrupti odit ipsa qui
              natus, distinctio, ut animi! Hic eaque, molestiae non modi harum
              sequi necessitatibus laborum dignissimos, doloribus praesentium,
              incidunt error eveniet. Id nemo ullam fugit, vitae odit
              voluptatibus assumenda ipsam ut earum molestiae?
            </p>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white mt-4">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
