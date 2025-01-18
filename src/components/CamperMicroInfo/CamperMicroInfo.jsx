import getIconPath from '../../core/utils/getIconPath';
import css from './CamperMicroInfo.module.css';

const CamperMicroInfo = ({ camper }) => {
  return (
    <div className={css.info}>
      <img
        src={getIconPath('star_yellow')}
        width={16}
        className={css.ratingIcon}
      />
      <span className={css.rating}>
        {camper?.rating}({camper?.reviews?.length}Reviews)
      </span>
      <img src={getIconPath('map')} width={16} height={16} className={css.locationIcon} />
      <span>{camper?.location}</span>
    </div>
  );
};

export default CamperMicroInfo;
