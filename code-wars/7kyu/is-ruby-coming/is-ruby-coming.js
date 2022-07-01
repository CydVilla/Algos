export const isRubyComing = (list) => {
    for (let i of list) {
      if (i.language === "Ruby") {
        return true
      }
    }
    return false
  }

  // export const isRubyComing = (list) => list.filter(i => i.language === 'Ruby').length ? true : false

  // export const isRubyComing = (list) => list.some(i => i.language === 'Ruby') 
