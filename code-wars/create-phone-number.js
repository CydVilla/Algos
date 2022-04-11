const  createPhoneNumber = (numbers) => {
    let result = "("
    for (let i = 0; i < numbers.length; i++) {
      let current = numbers[i]
      result += current
      if ( i === 2) {
        result += ") "
      } else if 
        (i === 5) {
          result += "-"
        }
    }
    return result
  }