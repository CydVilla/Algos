/**
 * 3Sum
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) - not counting the output array
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        nums.sort((a, b) => a - b);
        
        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicate values for the first element
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            
            let left = i + 1;
            let right = nums.length - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    
                    // Skip duplicate values for the second element
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    
                    // Skip duplicate values for the third element
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        
        return result;
    }
}

export default Solution;
