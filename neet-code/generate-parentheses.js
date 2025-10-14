/**
 * Generate Parentheses
 * Given an integer n, return all well-formed parentheses strings with n pairs.
 * 
 * Time Complexity: O(4^n / sqrt(n)) - Catalan number
 * Space Complexity: O(n) - recursion depth
 */
class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        
        const backtrack = (current, open, close) => {
            // Base case: we've used all n pairs
            if (current.length === 2 * n) {
                result.push(current);
                return;
            }
            
            // Add opening bracket if we haven't used all n
            if (open < n) {
                backtrack(current + '(', open + 1, close);
            }
            
            // Add closing bracket if it won't make string invalid
            if (close < open) {
                backtrack(current + ')', open, close + 1);
            }
        };
        
        backtrack('', 0, 0);
        return result;
    }
}

export default Solution;
