/**
 * Lowest Common Ancestor in Binary Search Tree
 * Given a BST and two nodes p and q, return their lowest common ancestor.
 * 
 * Time Complexity: O(h) where h is height
 * Space Complexity: O(h) - recursion stack
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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // If both p and q are less than root, LCA is in left subtree
        if (p.val < root.val && q.val < root.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        }
        
        // If both p and q are greater than root, LCA is in right subtree
        if (p.val > root.val && q.val > root.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        }
        
        // Otherwise, root is the LCA (split point)
        return root;
    }
}

export { TreeNode, Solution as default };
