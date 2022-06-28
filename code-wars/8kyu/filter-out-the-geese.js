// const gooseFilter = (birds) => {
//   let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//  return birds.filter(bird => !geese.includes(bird))
// };

const gooseFilter = (birds) => {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const result = []
    for (let i = 0; i < birds.length; i++) {
      for (let j = 0; j < geese.length; j++) {
        if (birds[i] === geese[j]) {
          break
        } if (j === geese.length-1) {
          result.push(birds[i])
        }
    }
    }
        return result
      }