//  Logic Drills: Traffic light
// JavaScript:

const updateLight = (current) => {
  console.log(current);
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
};

// 3 ways to Reverse a String

const reverseStr = (str) => {
  return str.split('').reverse().join('')
}
console.log(reverseStr('seth'))


const reverseStr2 = (str) => {
  const array = [];
  for (let i = str.length-1; i >= 0; i--) {
  array.push(str[i])
  }
  return array.join('')
}
console.log(reverseStr2('ronix'))

const reverseStr3 =  (str) => [...str].reverse().join('')
console.log(reverseStr3('Pokemon'))


