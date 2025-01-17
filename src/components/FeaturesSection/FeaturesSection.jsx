import css from './FeaturesSection.module.css';
import { useMyContext } from '../../components/MyContext/MyContext';
import FeatureItem from '../FeatureItem/FeatureItem';

const FeaturesSection = () => {
  const camper = useMyContext();
  const featuresList = [
    'AC',
    'TV',
    'bathroom',
    'kitchen',
    'radio',
    'refrigerator',
    'microwave',
    'gas',
    'water',
    'transmission',
  ];

  const detailsList = [
    'form',
    'length',
    'width',
    'height',
    'tank',
    'consumption',
  ];

  let camperFeatures = [];
  let camperDetails = [];

  for (const [key, value] of Object.entries(camper)) {
    if (featuresList.includes(key)) {
      camperFeatures.push(key === 'transmission' ? value : key);
    }

    if (detailsList.includes(key)) {
      camperDetails.push({ [key]: value });
    }
  }

  return (
    <div className={css.featuresContainer}>
      {camperFeatures && (
        <ul className={css.featuresList}>
          {camperFeatures.map(feature => (
            <FeatureItem key={feature} feature={feature} />
          ))}
        </ul>
      )}
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      <ul className={css.detailsList}>
        {camperDetails.map((item, index) => {
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
