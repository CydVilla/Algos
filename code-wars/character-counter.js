// const validateWord = (s)  => {
//     let data = {}
//     let targetNumber = 0
//     for (let i = 0; i < s.length; i++) {
//       data[s[i].toLowerCase()] = data[s[i]] ? data[s[i]]+1 : 1
//       if (i == s.length-1) {
//         targetNumber = data[s[i]]
//       }
//     }
//     for (const [key, value] of Object.entries(data)) {
//       if (value != targetNumber) {
//         return false
//   }
//   }
//     return true
//   }


const validateWord = (s)  => {
    let data = {}
    let targetNumber = 0
    for (let i = 0; i < s.length; i++) {
      data[s[i].toLowerCase()] = data[s[i]] ? data[s[i]]+1 : 1
      if (i == s.length-1) {
        targetNumber = data[s[i]]
      }
    }
    for (const [key, value] of Object.entries(data)) {
      if (value != targetNumber) {
        return false
  }
  }
    return true
  }