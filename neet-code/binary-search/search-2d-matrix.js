/**
 * Search a 2D Matrix
 * Given an m x n 2D matrix where each row is sorted and first integer of each row
 * is greater than last integer of previous row, return true if target exists.
 * 
 * Time Complexity: O(log(m * n))
 * Space Complexity: O(1)
 */
class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) return false;
        
        const m = matrix.length;
        const n = matrix[0].length;
        let left = 0;
        let right = m * n - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            // Convert 1D index to 2D coordinates
            const row = Math.floor(mid / n);
            const col = mid % n;
            const midValue = matrix[row][col];
            
            if (midValue === target) {
                return true;
            } else if (midValue < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }
}

export default Solution;
