import { coffeeStock, isCoffeeMachineReady } from "./state.js";
// const { coffeeStock, isCoffeeMachineReady } = require("./state");

//type=key; miligrams=value
const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 800);

const displayStock = (object) => {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
};
displayStock(coffeeStock);

// console.log(isCoffeeMachineReady);
