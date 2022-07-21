const getFirstPython = (list) => {
    for (let i of list) {
      if (i.language === 'Python') {
        return i.firstName + ', ' + i.country
      } 
  } 
    return 'There will be no Python developers'
  }


  // test case(s)
//   describe("Tests", () => {
//     it("test", () => {
//   var list1 = [
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
//   ];
  
//   var list2 = [
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//     { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
//   ];
  
//   var list3 = [
//     { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
//     { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
//   ];
  
//   console.log('List of developers: ', JSON.stringify(list1));
//   Test.assertEquals(getFirstPython(list1), getFirstPythonSolution(list1));
  
//   console.log('List of developers: ', JSON.stringify(list2));
//   Test.assertEquals(getFirstPython(list2), getFirstPythonSolution(list2));
  
//   console.log('List of developers: ', JSON.stringify(list3));
//   Test.assertEquals(getFirstPython(list3), getFirstPythonSolution(list3));