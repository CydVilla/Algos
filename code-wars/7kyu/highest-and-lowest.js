const highAndLow = (numbers) => {
    let numSplit = numbers.split(' ')
     let numsArray = numSplit.map(e => Number(e))
    let max = numsArray[0]
    let min = numsArray[0]
     for (let i of numsArray) {
       if (i > max) {
          max = Math.max(...numsArray) 
       }
       if (i < min) {
         min = Math.min(...numsArray)
       }
     }  
    return max + ' ' + min
  }