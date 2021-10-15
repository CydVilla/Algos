//  Logic Drills: Traffic light
// JavaScript:

// const updateLight = (current) => {
//   console.log(current);
//   if (current === "green") {
//     return "yellow";
//   } else if (current === "yellow") {
//     return "red";
//   } else {
//     return "green";
//   }
// };

// // 3 ways to Reverse a String

// const reverseStr = (str) => {
//   return str.split('').reverse().join('')
// }
// console.log(reverseStr('seth'))


// const reverseStr2 = (str) => {
//   const array = [];
//   for (let i = str.length-1; i >= 0; i--) {
//   array.push(str[i])
//   }
//   return array.join('')
// }
// console.log(reverseStr2('ronix'))

// const reverseStr3 =  (str) => [...str].reverse().join('')
// console.log(reverseStr3('Pokemon'))


// Two Sum
//  @param {number[]} nums
//  @param {number} target
//  @return {number[]}
 
 const twoSum = (nums, target) => {
  const result = []
  stop:
  for (let i = 0; i <= nums.length-1; i++) {
      for (let j = 0; j <= nums.length-1; j++) {
        console.log(i, j)
          // if (nums[i] + nums[j] === target) {
          //     result.push([i])
          //     result.push([j])
          //     break stop;
          // } 
      }
  }
      return result
  };

  twoSum([2,7,11,15] , 9)

