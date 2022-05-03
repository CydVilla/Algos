const mergeSortedArray = (leftArray, rightArray) => {
    let sortedArray = []    
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray.shift())
        } else {
            sortedArray.push(rightArray.shift())
        }
    }
    console.log(leftArray, 'hola', rightArray, 'sup')
    return  [...sortedArray, ...leftArray, ...rightArray];
}
console.log(mergeSortedArray([1,20,60,400], [6,8,9,11]))



// const mergeSortedArray = (leftArray, rightArray) => {
//     return leftArray.concat(rightArray).sort((a,b) => a - b)
// }
// console.log(mergeSortedArray([1,20,60,400], [6,8,9,11]))


