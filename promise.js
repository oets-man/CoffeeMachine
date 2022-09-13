const orderKopi = (res, rej) => {
  const ready = true;
  if (ready) {
    res("Berhasil dibuat!");
  } else {
    rej("Gagal dibuat!");
  }
};

const makeCoffee = () => new Promise(orderKopi);
const coffeePromise = makeCoffee();
console.log(makeCoffee);
console.log(coffeePromise);

const tesPromise = (a) =>
  new Promise((res, rej) => {
    if (a == 1) {
      res("OK");
    } else {
      rej("Not");
    }
  });

tesPromise(2).then(
  (v) => console.log("tes " + v),
  () => console.log("tes Gagal")
);
// console.log(tes);
