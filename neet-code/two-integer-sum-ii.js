/**
 * Two Integer Sum II
 * Given an array of integers numbers that is sorted in non-decreasing order.
 * Return the indices (1-indexed) of two numbers that add up to target.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        
        while (left < right) {
            const sum = numbers[left] + numbers[right];
            
            if (sum === target) {
                // Return 1-indexed positions
                return [left + 1, right + 1];
            } else if (sum < target) {
                // Need a larger sum, move left pointer right
                left++;
            } else {
                // Need a smaller sum, move right pointer left
                right--;
            }
        }
        
        return [];
    }
}

export default Solution;
