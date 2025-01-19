export const convertFilterToParams = filter => {
  const { location, equipment, form } = filter;
  const equipmentValues = equipment
    .map(item => {
      switch (item) {
        case 'automatic':
          return 'transmission=automatic';
        case 'manual':
          return 'transmission=manual';
        case 'diesel':
          return 'engine=diesel';
        case 'petrol':
          return 'engine=petrol';
        case 'hybrid':
          return 'engine=hybrid';

        default:
          return `${encodeURIComponent(item)}=true`;
      }
    })
    .join('&');

  let params = location ? `location=${encodeURIComponent(location)}&` : '';
  params += equipment?.length > 0 ? equipmentValues + '&' : '';
  params += form ? `form=${encodeURIComponent(form)}` : '';

  return params;
};
