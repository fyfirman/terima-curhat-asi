const getInitial = (name) => {
  const arrayOfNames = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase());

  if (arrayOfNames.length < 2) {
    return arrayOfNames[0];
  }
  return arrayOfNames[0] + arrayOfNames[1];
};

export default getInitial;
