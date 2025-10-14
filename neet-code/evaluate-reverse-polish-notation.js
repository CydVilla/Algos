/**
 * Evaluate Reverse Polish Notation
 * Given an array of strings tokens that represents a valid arithmetic expression in RPN.
 * Return the integer that represents the evaluation of the expression.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b) // Truncate toward zero
        };
        
        for (let token of tokens) {
            if (operators[token]) {
                // Pop two operands
                const b = stack.pop();
                const a = stack.pop();
                
                // Apply operator and push result
                stack.push(operators[token](a, b));
            } else {
                // Token is a number
                stack.push(parseInt(token));
            }
        }
        
        return stack[0];
    }
}

export default Solution;
