import AC from '/src/assets/images/icons/AC.svg';
import TV from '/src/assets/images/icons/TV.svg';
import kitchen from '/src/assets/images/icons/kitchen.svg';
import automatic from '/src/assets/images/icons/automatic.svg';
import bathroom from '/src/assets/images/icons/bathroom.svg';
import radio from '/src/assets/images/icons/radio.svg';
import refrigerator from '/src/assets/images/icons/refrigerator.svg';
import microwave from '/src/assets/images/icons/microwave.svg';
import gas from '/src/assets/images/icons/gas.svg';
import water from '/src/assets/images/icons/water.svg';

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
