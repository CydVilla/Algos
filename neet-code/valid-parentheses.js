/**
 * Valid Parentheses
 * Given a string s consisting of parentheses characters '(', ')', '{', '}', '[' and ']'.
 * Return true if s is a valid string, and false otherwise.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        
        for (let char of s) {
            if (char === '(' || char === '{' || char === '[') {
                // Opening bracket - push to stack
                stack.push(char);
            } else {
                // Closing bracket - check if it matches top of stack
                if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
                    return false;
                }
                stack.pop();
            }
        }
        
        // Stack should be empty if all brackets are matched
        return stack.length === 0;
    }
}

export default Solution;
