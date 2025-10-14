/**
 * Minimum Stack
 * Design a stack that supports push, pop, top, and getMin operations in O(1) time.
 * 
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(n)
 */
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = []; // Tracks minimum at each level
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
        // Update min stack
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const currentMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

export default MinStack;
