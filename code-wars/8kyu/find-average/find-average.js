export const find_average = (array) => array[0] ? array.reduce((a, b) => a+b)/array.length : 0 

// export const find_average = (array) => {   
//     const initialValue = 0
//   if (array[0]) {
//    let add = array.reduce((previousValue, currentValue) => 
//     previousValue + currentValue,
//     initialValue
//    )
//     return add / array.length
//   } 
//     return 0
// }