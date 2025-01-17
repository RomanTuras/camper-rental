import css from './ReviewerRating.module.css';

const ReviewerRating = ({ rating }) => {
  const ratingPattern = [0, 0, 0, 0, 0].map((_, index) =>
    index + 1 <= Math.round(rating) ? 1 : 0
  );

  const getStarIconPath = isYellow => {
    const path = '/src/assets/images/icons/';
    return isYellow == 1 ? `${path}star_yellow.svg` : `${path}star_grey.svg`;
  };

  return (
    <ul className={css.reviewerRating}>
      {ratingPattern.map((isYellow, index) => (
        <img key={index} src={getStarIconPath(isYellow)} alt={index} width={16} height={16} />
      ))}
    </ul>
  );
};

export default ReviewerRating;
