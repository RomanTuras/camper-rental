export const getParamsURL = ({ searchParams }) => {
  const allParams = Array.from(searchParams.entries());
  const equipmentValues = allParams
    .filter(
      ([key]) =>
        key !== 'location' &&
        key !== 'type' &&
        key !== 'page' &&
        key !== 'limit'
    )
    .map(([key]) => key);

  return {
    location: searchParams.get('location') || '',
    equipment: equipmentValues,
    form: searchParams.get('type') || 'van',
  };
};
