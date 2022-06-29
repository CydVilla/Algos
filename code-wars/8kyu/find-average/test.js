import {find_average} from './find-average';


test('function calculates the average of the numbers in a given list', () => {
    expect(find_average([1,1,1])).toBe(1)
    expect(find_average([1,2,3])).toBe(2)
    expect(find_average([1,2,3,4])).toBe(2.5)
      });
      
// Note: Empty arrays should return 0.


// test('adds a string to a number', () => {
//   expect(numberToString(1)).toBe('1');
// });
