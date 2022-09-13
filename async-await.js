const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};
// getCoffee();

async function makeCoffee() {
  try {
    const c = await getCoffee();
    // console.log(c);
  } catch (err) {
    console.log(err);
  }
}
const a = makeCoffee();
console.log(a);
