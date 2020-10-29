import Star from "../icons/Star";
import useHasura from "../../hooks/useHasura";

const StarRating = ({ product, total = 5, className }) => {
  const { data, error, state } = useHasura(
    `query AverageRating($product: String!){
      review_aggregate(where:{
        product:{
          _eq: $product
        }
      }) {
        aggregate {
          avg {
            rating
          }
        }
      }
    }
    `,
    { product }
  );

  const stars = [];
  for (let index = 0; index <= total - 1; index++) {
    stars.push(
      <Star
        key={index}
        shouldfill={(
          index <=
            Math.floor(data?.review_aggregate.aggregate.avg.rating) - 1 || 0
        ).toString()}
      />
    );
  }
  return (
    <div className={`flex justify-between w-64 ${className}`}>
      <span className="text-blek-800">Average:</span> {stars}
    </div>
  );
};

export default StarRating;
