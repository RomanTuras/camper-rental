export const convertFilterToParams = (filter) => {
  const {location, equipment, form} = filter;
  const equipmentValues = equipment.map(item => `${encodeURIComponent(item)}=true`).join('&');
  
  let params = location ? `location=${encodeURIComponent(location)}&` : '';
  params += equipment?.length>0 ? equipmentValues + '&' : '';
  params += form ? `form=${encodeURIComponent(form)}` : '';

  return params;
}
