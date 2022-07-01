export const countLanguages = (list) => {
    let result = {}
    for (let i = 0; i < list.length; i++) {
      if (result[list[i].language]) {
        result[list[i].language] += 1 
      } else {
        result[list[i].language] = 1
      }
    }
    return result
  }
  