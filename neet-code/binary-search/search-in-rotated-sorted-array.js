/**
 * Search in Rotated Sorted Array
 * Given a rotated sorted array with unique elements and a target,
 * return the index of target, or -1 if not found.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            
            if (nums[mid] === target) {
                return mid;
            }
            
            // Determine which half is sorted
            if (nums[left] <= nums[mid]) {
                // Left half is sorted
                if (nums[left] <= target && target < nums[mid]) {
                    // Target is in sorted left half
                    right = mid - 1;
                } else {
                    // Target is in right half
                    left = mid + 1;
                }
            } else {
                // Right half is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    // Target is in sorted right half
                    left = mid + 1;
                } else {
                    // Target is in left half
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
}

export default Solution;
