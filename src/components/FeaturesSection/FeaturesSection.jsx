import css from './FeaturesSection.module.css';
import { useMyContext } from '../../components/MyContext/MyContext';
import FeatureItem from '../FeatureItem/FeatureItem';
import CamperDetails from '../../core/utils/camperDetails';

const FeaturesSection = () => {
  const camper = useMyContext();
  const camperDetailsClass = new CamperDetails(camper);
  const features = camperDetailsClass.getAvailableFeatures();
  const details = camperDetailsClass.getAvailableDetails()

  return (
    <div className={css.featuresContainer}>
      {features && (
        <ul className={css.featuresList}>
          {features.map(feature => (
            <FeatureItem key={feature} feature={feature} />
          ))}
        </ul>
      )}
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      <ul className={css.detailsList}>
        {details.map((item, index) => {
          const [key, value] = Object.entries(item)[0];
          return (
            <li key={index}>
              {key} - {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeaturesSection;
