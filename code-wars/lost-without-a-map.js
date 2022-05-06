const maps = (x) => {
    let result = []
    for (let i = 0; i <= x.length; i++) {
      if (x[i] > 0) {
         result.push(x[i] * 2)
      }
    }
    return result
  }