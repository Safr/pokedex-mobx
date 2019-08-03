export const ascendSort = arr => arr.sort((a, b) => a.id - b.id);

export const findCurrent = (arr, id) =>
  arr.filter(item => item.id === Number(id))[0];

export const filterArrayByType = (arr, typeName) =>
  arr.filter(
    item => item.type.filter(typeItem => typeItem === typeName)[0] === typeName,
  );

export const splitByOffset = (arr, activePage) => {
  switch (activePage) {
    case 1:
      return arr.slice(0, 10);
    case 2:
      return arr.slice(10, 20);
    case 3:
      return arr.slice(20);
    default:
      return null;
  }
};
