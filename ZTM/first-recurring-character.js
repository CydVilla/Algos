// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2
// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1
// Given an array = [2,3,4,5]:
// It should return undefined
function firstRecurringCharacter(input) {
    let result = undefined
    const obj = {
      
    }
    let found = false
    input.forEach(number => {
        obj[number] ? obj[number] = obj[number] + 1 :  obj[number] = 1
        // if (!obj[number]) {
        //     obj[number] = 1
        // } else {
        //     obj[number] = obj[number] + 1
        // } console.log(obj[number])
        if (!found && obj[number] == 2) {
            result = number
            found = true
        }
    });
    return result
    console.log(obj)
}
console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))
// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2