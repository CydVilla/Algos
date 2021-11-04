// Convert Boolean values to strings 'Yes' or 'No

// const boolToWord = (bool) => (bool ? 'Yes' : 'No') 

// if (bool) {
//   return 'Yes'
// } else {
//   return 'No'
// }

const boolToWord = (bool) => {
    switch (bool) {
      case true :
      return 'Yes'
      case false :
      return 'No'    
  }
  }