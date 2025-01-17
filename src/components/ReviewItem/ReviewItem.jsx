import ReviewerRating from '../ReviewerRating/ReviewerRating';
import css from './ReviewItem.module.css';

const ReviewItem = ({ review }) => {
  // console.log(review);
  
  const userLetter = review.reviewer_name.charAt(0);
  // console.log(userLetter);
  
  
  return <li className={css.reviewItem}>
    <div className={css.userContainer}>
      <span className={css.userAvatar}>{userLetter}</span>
      <div className="userInfo">
        <p className={css.userName}>{review.reviewer_name}</p>
        <ReviewerRating rating={review.reviewer_rating} />
      </div>
    </div>
    <p className={css.userComment}>{review.comment}</p>
    </li>;
};

export default ReviewItem;
