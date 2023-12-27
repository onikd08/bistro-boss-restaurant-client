const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-1/3 mx-auto my-12 text-center">
      <p className="mb-4 text-orange-300">---{subHeading}---</p>
      <h3 className="text-3xl border-y-4 py-4 uppercase border-gray-500">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
