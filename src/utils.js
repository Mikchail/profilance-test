export const getDateTime = (time) => {
  const date = new Date(time);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const getDateTimeString = (time) => {
  const date = new Date(time);
  return `${FullMonth[date.getMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`;
};

export const FullMonth = {
  0: `January`,
  1: `February`,
  2: `March`,
  3: `April`,
  4: `May`,
  5: `June`,
  6: `July`,
  7: `August`,
  8: `September`,
  9: `October`,
  10: `November`,
  11: `December`,
};