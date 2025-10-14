/**
 * Daily Temperatures
 * Given an array of temperatures, return an array where result[i] is the number of days 
 * until a warmer temperature. If there is no future warmer day, set result[i] to 0.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []; // Store indices
        
        for (let i = 0; i < temperatures.length; i++) {
            // While current temp is warmer than temp at stack top
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;
            }
            
            stack.push(i);
        }
        
        return result;
    }
}

export default Solution;
