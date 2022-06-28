const countDevelopers = (list) => {
    let result = 0
    for (let i of list) {
    if (i.continent === 'Europe' && i.language === 'JavaScript' ) {
        result += 1
      } 
    }
    return result
  }