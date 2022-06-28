const isPalindrome = (x) => {
    const lowerCase = x.toLowerCase()
    const length = x.length
    for (let i = 0; i < length / 2; i++) {
      if (lowerCase[i] !== lowerCase[length - 1 - i ]) {
      return false 
    }
    }
    return true
  }