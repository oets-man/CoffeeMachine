const orderCoffee = (cb) => {
  let coffee = null;
  console.log("Sedang membuat kopi, silakan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    cb(coffee);
  }, 1000);
};

orderCoffee((c) => {
  console.log(c);
});
