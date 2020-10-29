const FlavorRating = ({
  rating = 4,
  total = 7,
  className = "",
  labelA = "Label A",
  labelB = "Label B",
}) => {
  const numericRating = new Number(rating - 1);
  const nodes = [];
  for (let index = 0; index <= total - 1; index++) {
    nodes.push(
      <div
        key={index}
        className={`flex-1 h-full ${
          rating === index + 1 ? "bg-current" : ""
        } rounded-md`}
      />
    );
  }
  return (
    <div className={`${className}`}>
      <div className="flex justify-between"></div>

      <div className="flex items-center w-full h-2">
        <p className="w-20 mb-2 text-blek-600">{labelA}</p>
        <div className="flex justify-between flex-1 h-full border border-gray-400 rounded-md">
          {nodes}
        </div>
        <p className="w-20 mb-2 text-right text-blek-600">{labelB}</p>
      </div>
    </div>
  );
};

export default FlavorRating;
