import { useState } from "react";
import Star from "./Star";

function StarRating() {
  const [rating, setRating] = useState(0);
  const wordRatings = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  const onClick = (index) => {
    setRating(index + 1);
  };

  return (
    <section className="ratings-container">
      <div className="stars-container">
        {wordRatings.map((star, index) => (
          <Star
            key={index}
            isSelected={index < rating}
            onClick={() => onClick(index)}
          />
        ))}
      </div>

      <h2>
        {rating > 0 ? wordRatings[rating - 1] : "Tap to Rate Your Experience"}
      </h2>
    </section>
  );
}

export default StarRating;
