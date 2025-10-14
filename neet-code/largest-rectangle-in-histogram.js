/**
 * Largest Rectangle In Histogram
 * Given an array of heights, return the area of the largest rectangle 
 * that can be formed among the bars.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; // Store indices
        let maxArea = 0;
        
        for (let i = 0; i < heights.length; i++) {
            // While current height is less than height at stack top
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                const heightIndex = stack.pop();
                const height = heights[heightIndex];
                
                // Width is distance from current index to previous stack element
                // (or from start if stack is empty)
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                
                maxArea = Math.max(maxArea, height * width);
            }
            
            stack.push(i);
        }
        
        // Process remaining bars in stack
        while (stack.length > 0) {
            const heightIndex = stack.pop();
            const height = heights[heightIndex];
            const width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, height * width);
        }
        
        return maxArea;
    }
}

export default Solution;
