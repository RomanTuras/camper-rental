import getIconPath from '../../core/utils/getIconPath.js';
import css from './FeatureItem.module.css';

const FeatureItem = ({ feature, isDarken = false }) => {
  return (
    <li
      className={css.featureItem}
      style={{
        backgroundColor: isDarken ? 'var(--darken-badges' : 'var(--badges)',
      }}
    >
      <img src={getIconPath(feature)} alt={feature} width={20} height={20} />
      <span className={css.featureName}>{feature}</span>
    </li>
  );
};

export default FeatureItem;
