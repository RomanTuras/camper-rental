import css from './ReviewerRating.module.css';
import getIconPath from '../../core/utils/getIconPath';

const ReviewerRating = ({ rating }) => {
  const ratingPattern = [0, 0, 0, 0, 0].map((_, index) =>
    index + 1 <= Math.round(rating) ? 1 : 0
  );

  const getStarIconPath = isYellow => {
    return isYellow == 1
      ? getIconPath('star_yellow')
      : getIconPath('star_grey');
  };

  return (
    <ul className={css.reviewerRating}>
      {ratingPattern.map((isYellow, index) => (
        <img
          key={index}
          src={getStarIconPath(isYellow)}
          alt={index}
          width={16}
          height={16}
        />
      ))}
    </ul>
  );
};

export default ReviewerRating;
