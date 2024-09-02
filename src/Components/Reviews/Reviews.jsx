import React from "react";
import "./Reviews.css"; // Include this line to apply the CSS styles

const reviews = [
  {
    rating: 5,
    text: "The quality of their work is impressive.",
    author: "Founder, Desert Dweller Sports Network",
  },
  {
    rating: 5,
    text: "UXD Consults project management was highly effective.",
    author: "CEO, Kuumba",
  },
  {
    rating: 5,
    text: "They’ve come up with new ideas that have made the app more interesting and...",
    author: "President & CEO, Nonprofit",
  },
  {
    rating: 5,
    text: "I thought the price was very good compared to other developers — unfortunately...",
    author: "Founder, Healthcare Services Company",
  },
];

const ReviewCard = ({ rating, text, author }) => {
  return (
    <div className="review-card">
      <div className="rating">
        <span className="rating-number">{rating}</span>
        <span className="stars">
          {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
        </span>
      </div>
      <p className="review-text">"{text}"</p>
      <p className="review-author">{author}</p>
      <p className="verified-review">✔ Verified Review</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="section-title">
        Customer <span className="overall-rating">feedbacks</span>
      </h2>
      <div className="reviews-carousel">
        <div className="reviews">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
