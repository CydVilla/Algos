/**
 * Binary Search
 * Given a sorted array of distinct integers and a target, return the index of target.
 * If target doesn't exist, return -1.
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
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}

export default Solution;
