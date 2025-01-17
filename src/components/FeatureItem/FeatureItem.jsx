import AC from '../../assets/images/AC.svg';
import TV from '../../assets/images/TV.svg';
import kitchen from '../../assets/images/kitchen.svg';
import automatic from '../../assets/images/automatic.svg';
import bathroom from '../../assets/images/bathroom.svg';
import radio from '../../assets/images/radio.svg';
import refrigerator from '../../assets/images/refrigerator.svg';
import microwave from '../../assets/images/microwave.svg';
import gas from '../../assets/images/gas.svg';
import water from '../../assets/images/water.svg';

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
