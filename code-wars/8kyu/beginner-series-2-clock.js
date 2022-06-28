const past = (h, m, s) => {
    let result = (h * 3.6e+6) +  (m * 60000) + (s * 1000)
    return result
  }