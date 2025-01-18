import logo from '../../assets/images/logo.svg';
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
import panelTruck from '../../assets/images/panelTruck.svg';
import fullyIntegrated from '../../assets/images/fullyIntegrated.svg';
import alcove from '../../assets/images/alcove.svg';
import star_yellow from '../../assets/images/star_yellow.svg';
import star_grey from '../../assets/images/star_grey.svg';
import map from '../../assets/images/map.svg';
import heart from '../../assets/images/heart.svg';
import heart_selected from '../../assets/images/heart_selected.svg';

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
  logo,
  star_yellow,
  star_grey,
  map,
  panelTruck,
  fullyIntegrated,
  alcove,
  heart,
  heart_selected,
};

const getIconPath = name => {
  return icons[name] || water;
};

export default getIconPath;
