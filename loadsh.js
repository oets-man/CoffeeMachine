import _ from "lodash";
const myArray = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

console.log(sum);

let sum2 = myArray.reduce((prev, curr) => {
  return prev + curr;
});

console.log(sum2);

const lodash_ = [1, 2, 3, 3];
const sumlodash = _.sum(lodash_);
console.log(sumlodash);
