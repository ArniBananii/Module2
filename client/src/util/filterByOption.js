const filterByOption = (array, options) => {
  console.log("test test test");
  let filteredArray = array.filter((card) => {
    console.log("card", card);
    const typesArray = card.types.map((type) => {
      console.log("type", type);
      return type;
    });
    console.log("typesArray", typesArray);
    if (options.toUpperCase() === "ETHER") return typesArray.includes("ETHER");
  });

  return filteredArray;
};

export default filterByOption;
