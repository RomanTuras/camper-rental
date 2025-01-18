import { useDispatch, useSelector } from 'react-redux';
import css from './CamperCard.module.css';
import { selectFavourites } from '../../redux/favourites/selectors';
import { toggleFavourite } from '../../redux/favourites/slice';
import getIconPath from '../../core/utils/getIconPath';
import CamperMicroInfo from '../CamperMicroInfo/CamperMicroInfo';
import CamperPrice from '../CamperPrice/CamperPrice';
import CamperDetails from '../../core/utils/camperDetails';
import FeatureItem from '../FeatureItem/FeatureItem';
import SizedBox from '../SizedBox/SizedBox';
import { AccentButton } from '../Button/Button';

const CamperCard = ({ camper, actionCamperDetails }) => {
  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();

  const camperDetailsClass = new CamperDetails(camper);
  const features = camperDetailsClass.getAvailableFeatures();

  const handleAddToFavourites = e => {
    e.stopPropagation();
    dispatch(toggleFavourite(camper.id));
  };

  const handleCamperDetails = () => {
    actionCamperDetails?.(camper.id);
  };

  return (
    <li className={css.camperCard}>
      <img
        src={camper.gallery[0]?.thumb}
        alt={camper.name}
        className={css.camperImage}
      />
      <div className={css.camperCardColumn}>
        <div className={css.camperMainInfo}>
          <h2>{camper.name}</h2>
          <div className={css.camperActions}>
            <CamperPrice>{camper.price}</CamperPrice>
            <button onClick={e => handleAddToFavourites(e)}>
              <img
                src={
                  favourites.includes(Number(camper.id))
                    ? getIconPath('heart_selected')
                    : getIconPath('heart')
                }
              />
            </button>
          </div>
        </div>
        <CamperMicroInfo camper={camper} />
        <p className={css.camperDescription}>{camper.description}</p>
        {features && (
          <ul className={css.featuresList}>
            {features.map(feature => (
              <FeatureItem key={feature} feature={feature} />
            ))}
          </ul>
        )}
        <SizedBox height={'24px'} />
        <AccentButton action={handleCamperDetails}>Show more</AccentButton>
      </div>
    </li>
  );
};

export default CamperCard;
