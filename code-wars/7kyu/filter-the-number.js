// Filter the number

const FilterString = (value) => {
    return Number(value.replace(/\D/g,''));
  }

// const FilterString = (value) => {
//     const numberCheckList = [0,1,2,3,4,5,6,7,8,9]
//     let valueSplitFilter = value.split('').filter(char => numberCheckList.includes(Number(char)))
//     return Number(valueSplitFilter.join(''))
//   }