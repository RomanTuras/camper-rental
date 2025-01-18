const formatCamelCase = str =>
  str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, match => match.toUpperCase());

export default formatCamelCase;
