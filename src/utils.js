const getNumber = (min, max) => Math.round(Math.random() * (min - max + 1) + max);
const getIndex = (array) => Math.floor(Math.random() * array.length);
export { getNumber, getIndex };