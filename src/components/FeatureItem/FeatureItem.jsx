const FeatureItem = ({feature}) => {
  const getIconPathByName = name => `/src/assets/images/icons/${name}.svg`;

  return (
    <li>
      <img src={getIconPathByName(feature)} alt={feature} />
      {feature}
    </li>
  );
};

export default FeatureItem;
