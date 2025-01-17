import AC from '../../assets/images/icons/AC.svg';
import TV from '../../assets/images/icons/TV.svg';
import kitchen from '../../assets/images/icons/kitchen.svg';
import automatic from '../../assets/images/icons/automatic.svg';
import bathroom from '../../assets/images/icons/bathroom.svg';
import radio from '../../assets/images/icons/radio.svg';
import refrigerator from '../../assets/images/icons/refrigerator.svg';
import microwave from '../../assets/images/icons/microwave.svg';
import gas from '../../assets/images/icons/gas.svg';
import water from '../../assets/images/icons/water.svg';

const icons = {
  AC,
  TV,
  kitchen,
  automatic,
  bathroom,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
};

const FeatureItem = ({ feature }) => {

  return (
    <li>
      <img src={icons[feature]} alt={feature} />
      {feature}
    </li>
  );
};

export default FeatureItem;
