/**
 * Find Minimum in Rotated Sorted Array
 * Given a rotated sorted array with unique elements, return the minimum element.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            // If mid element is greater than right element,
            // minimum must be in right half
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // Otherwise, minimum is in left half (including mid)
                right = mid;
            }
        }
        
        return nums[left];
    }
}

export default Solution;
