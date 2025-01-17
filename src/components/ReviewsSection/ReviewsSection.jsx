import { useMyContext } from '../MyContext/MyContext';
import ReviewItem from '../ReviewItem/ReviewItem';
import css from './ReviewsSection.module.css';

const ReviewsSection = () => {
  const camper = useMyContext();
  console.log(camper);
  const reviews = camper?.reviews ?? [];

  return (
    <div className={css.reviewsContainer}>
      {reviews.map(review => (
          <ReviewItem key={review.comment} review={review} />
        ))}
    </div>
  );
};

export default ReviewsSection;
