// // const { coffeeStock, isCoffeeMachineReady } = require("./state");
import { coffeeStock, isCoffeeMachineReady } from "./state.js";
const makeCoffee = (type, mg) => {
  if (coffeeStock[type] >= mg) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};
makeCoffee("arabica", 10);
console.log(makeCoffee);

const displayStock = (object) => {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
};
displayStock(coffeeStock);

// console.log(isCoffeeMachineReady);
