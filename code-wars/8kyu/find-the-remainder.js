const remainder = (n, m) => {
    console.log(n, m)
    if (n > m) {
      if (n == 0) {
        return 0
      }
      return n % m
    } else if (m >= n) {
     if (n == 0) {
        return NaN
      }
      return m % n
    } 
  }