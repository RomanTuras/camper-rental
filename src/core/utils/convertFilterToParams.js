export const convertFilterToParams = filter => {
  const { location, equipment, form } = filter;
  const equipmentValues = equipment
    .map(item => {
      return item == "automatic" ? "transmission=automatic" : `${encodeURIComponent(item)}=true`;
    })
    .join('&');

  let params = location ? `location=${encodeURIComponent(location)}&` : '';
  params += equipment?.length > 0 ? equipmentValues + '&' : '';
  params += form ? `form=${encodeURIComponent(form)}` : '';

  return params;
};
