# NeetCode Solutions

This folder contains solutions to common coding interview problems from NeetCode.

## Problems Solved

1. **Contains Duplicate** - `contains-duplicate.js`
   - Check if an array contains any duplicate values
   - Time: O(n), Space: O(n)

2. **Valid Anagram** - `valid-anagram.js`
   - Check if two strings are anagrams of each other
   - Time: O(n), Space: O(1)

3. **Two Sum** - `two-sum.js`
   - Find two numbers that add up to a target value
   - Time: O(n), Space: O(n)

4. **Group Anagrams** - `group-anagrams.js`
   - Group strings that are anagrams of each other
   - Time: O(n * m log m), Space: O(n * m)

5. **Top K Frequent Elements** - `top-k-frequent-elements.js`
   - Find the k most frequent elements in an array
   - Time: O(n log n), Space: O(n)

## Running Tests

To run all tests:

```bash
node run-tests.js
```

Or run the test runner directly:

```bash
node test-runner.js
```

## Individual Usage

Each solution is implemented as a class with the required method. Example:

```javascript
import Solution from './contains-duplicate.js';
const solution = new Solution();

// Test the solution
const result = solution.hasDuplicate([1, 2, 3, 3]);
console.log(result); // true
```

## Test Results

The test runner will show:
- ✅ Passed tests
- ❌ Failed tests with expected vs actual values
- 📊 Summary statistics
- 🎯 Success rate
