/**
 * Invert Binary Tree
 * Given the root of a binary tree, invert the tree and return its root.
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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) {
            return null;
        }
        
        // Swap left and right children
        const temp = root.left;
        root.left = root.right;
        root.right = temp;
        
        // Recursively invert subtrees
        this.invertTree(root.left);
        this.invertTree(root.right);
        
        return root;
    }
}

export { TreeNode, Solution as default };
