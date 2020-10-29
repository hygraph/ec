import Star from "../icons/Star";

const Review = ({ review }) => {
  const { author, body, rating } = review;
  const { username } = author;
  return (
    <div className="relative px-4 py-2 bg-gray-100 rounded-lg">
      <span
        className="absolute top-0 text-4xl text-current"
        style={{ left: "-5px", top: "-20px" }}
      >
        ”
      </span>
      <p className="mb-4 italic text-blek-700">{body}</p>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 mr-2 font-bold bg-gray-400 rounded-full text-display">
          <span className="text-xl text-blek-600">
            {username[0].toUpperCase()}
          </span>
        </div>
        <p>{username}</p>
        <div className="flex ml-auto">
          <span className="mr-2">{rating}</span> <Star shouldfill="true" />
        </div>
      </div>
    </div>
  );
};

export default Review;
