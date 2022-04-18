const century = (year) => {
    let result = year / 100
    if (year%100 === 0) {
        return Math.floor(result) 
  } else {
    return Math.floor(result)+1
  }
  }