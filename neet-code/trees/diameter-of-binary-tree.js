/**
 * Diameter of Binary Tree
 * The diameter is the length of the longest path between any two nodes.
 * The path may or may not pass through the root.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) - recursion stack
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;
        
        const height = (node) => {
            if (node === null) {
                return 0;
            }
            
            const leftHeight = height(node.left);
            const rightHeight = height(node.right);
            
            // Update diameter: path through this node
            diameter = Math.max(diameter, leftHeight + rightHeight);
            
            // Return height of this subtree
            return 1 + Math.max(leftHeight, rightHeight);
        };
        
        height(root);
        return diameter;
    }
}

export { TreeNode, Solution as default };
