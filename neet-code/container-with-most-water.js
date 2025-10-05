/**
 * Container With Most Water
 * You are given an integer array heights where heights[i] represents the height of the ith bar.
 * You may choose any two bars to form a container. 
 * Return the maximum amount of water a container can store.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;
        
        while (left < right) {
            // Calculate area: width * min(left height, right height)
            const width = right - left;
            const height = Math.min(heights[left], heights[right]);
            const area = width * height;
            
            maxArea = Math.max(maxArea, area);
            
            // Move the pointer with the smaller height
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
}

export default Solution;
