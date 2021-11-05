// Start algo here:

// const FilterString = (value) => {
//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let result = "";
//   for (let i = 0; i < value.length; i++) {
//     if (numbers.includes(Number(value[i]))) {
//       //    result = result + value[i]
//       result += value[i];
//       console.log(result);
//     }
//   }
//   return Number(result);
// };

const test = ( char, index, arr) => {
    console.log(char, index, arr)
//   if (numbers.includes(Number(char))) {
//     //    result = result + value[i]
//     result += char;
//     console.log(result);
//   }
}
const FilterString = (value) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = "";
  let splitStr = value.split("");
  splitStr.forEach(test);
  return Number(result);
};

console.log(FilterString("a1b2c3"));
