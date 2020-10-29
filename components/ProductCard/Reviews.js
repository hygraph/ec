import { useState } from "react";
import Review from "./Review";

import useHasura, { hasuraStates as STATE } from "../../hooks/useHasura";

const Reviews = ({ product = "VIVIGALZINF2018123", className }) => {
  const { data, error, state } = useHasura(
    `query FetchReviews($product: String!) {
            allReviews: review_aggregate(where: {
          product: {
            _eq: $product
          }
        }) {
          reviews: nodes {
            rating
            body
            author {
              name
              username
            }
          }
        }
      }
    `,
    { product }
  );

  const [reviewIndex, setReviewIndex] = useState(0);
  const currentReview = data?.allReviews.reviews[reviewIndex];

  return (
    <div className={`${className}`}>
      {state === STATE.LOADING && <p>Loading...</p>}
      {state === STATE.ERROR && <p>Error!</p>}
      {state === STATE.LOADED && <Review review={currentReview} />}
      <div className="flex justify-center">
        {data &&
          data.allReviews.reviews.map((_, index) => {
            return (
              <div
                className={`w-2 h-2 rounded-full ${
                  index === reviewIndex ? "bg-gray-500" : "bg-gray-300"
                } mx-2 mt-4`}
                onClick={() => setReviewIndex(index)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Reviews;
