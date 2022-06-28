// Find the smallest interger 

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let result = args[0]
        for (let i=0; i < args.length; i++) {
            if (args[i] < result) {
                result = args[i]
            }
        }
        return result
    }
  }
  const test = new SmallestIntegerFinder()
  
  console.log(test.findSmallestInt([78,56,232,12,8]))

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//       let result = args[0]
//       let i = 2
//       while (i < args.length) {
//         if (args[i] < result) {
//             result = args[i]
//         }
//         i++
//       }
//       return result
//   }
// }
// const test = new SmallestIntegerFinder()
// console.log(test.findSmallestInt([78,56,232,12,8]))


// (findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');