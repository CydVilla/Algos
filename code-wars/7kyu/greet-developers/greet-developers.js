export const greetDevelopers = (list) => {
    for (let i of list) {
      i.greeting = `Hi ${i.firstName}, what do you like the most about ${i.language}?` 
    }
    return list
  }