/**
 * Test Runner for Trees Solutions
 */

import Solution1, { TreeNode as TreeNode1 } from './invert-binary-tree.js';
import Solution2, { TreeNode as TreeNode2 } from './maximum-depth-of-binary-tree.js';
import Solution3, { TreeNode as TreeNode3 } from './diameter-of-binary-tree.js';
import Solution4, { TreeNode as TreeNode4 } from './lowest-common-ancestor-bst.js';
import Solution5, { TreeNode as TreeNode5 } from './binary-tree-level-order-traversal.js';

class TestRunner {
    constructor() {
        this.passed = 0;
        this.failed = 0;
        this.total = 0;
    }

    // Helper to create tree from array (level order)
    createTree(arr, TreeNode) {
        if (!arr || arr.length === 0) return null;
        
        const root = new TreeNode(arr[0]);
        const queue = [root];
        let i = 1;
        
        while (queue.length > 0 && i < arr.length) {
            const node = queue.shift();
            
            if (i < arr.length && arr[i] !== null) {
                node.left = new TreeNode(arr[i]);
                queue.push(node.left);
            }
            i++;
            
            if (i < arr.length && arr[i] !== null) {
                node.right = new TreeNode(arr[i]);
                queue.push(node.right);
            }
            i++;
        }
        
        return root;
    }

    // Helper to convert tree to array (level order)
    treeToArray(root) {
        if (!root) return [];
        
        const result = [];
        const queue = [root];
        
        while (queue.length > 0) {
            const node = queue.shift();
            
            if (node === null) {
                result.push(null);
            } else {
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        
        // Remove trailing nulls
        while (result.length > 0 && result[result.length - 1] === null) {
            result.pop();
        }
        
        return result;
    }

    // Find node in tree by value
    findNode(root, val) {
        if (!root) return null;
        if (root.val === val) return root;
        
        const left = this.findNode(root.left, val);
        if (left) return left;
        
        return this.findNode(root.right, val);
    }

    runTest(testName, expected, actual) {
        this.total++;
        const passed = JSON.stringify(expected) === JSON.stringify(actual);
        
        if (passed) {
            this.passed++;
            console.log(`✅ ${testName}: PASSED`);
        } else {
            this.failed++;
            console.log(`❌ ${testName}: FAILED`);
            console.log(`   Expected: ${JSON.stringify(expected)}`);
            console.log(`   Actual: ${JSON.stringify(actual)}`);
        }
    }

    runAllTests() {
        console.log('🚀 Running Trees Solutions Tests\n');
        console.log('='.repeat(50));

        // Test 1: Invert Binary Tree
        console.log('\n📋 Test 1: Invert Binary Tree');
        const solution1 = new Solution1();
        
        let tree1 = this.createTree([1,2,3,4,5,6,7], TreeNode1);
        let result1 = solution1.invertTree(tree1);
        this.runTest(
            'Example 1: [1,2,3,4,5,6,7]',
            [1,3,2,7,6,5,4],
            this.treeToArray(result1)
        );
        
        let tree2 = this.createTree([3,2,1], TreeNode1);
        let result2 = solution1.invertTree(tree2);
        this.runTest(
            'Example 2: [3,2,1]',
            [3,1,2],
            this.treeToArray(result2)
        );
        
        let tree3 = this.createTree([], TreeNode1);
        let result3 = solution1.invertTree(tree3);
        this.runTest(
            'Example 3: []',
            [],
            this.treeToArray(result3)
        );

        // Test 2: Maximum Depth
        console.log('\n📋 Test 2: Maximum Depth of Binary Tree');
        const solution2 = new Solution2();
        
        let tree4 = this.createTree([1,2,3,null,null,4], TreeNode2);
        this.runTest(
            'Example 1: [1,2,3,null,null,4]',
            3,
            solution2.maxDepth(tree4)
        );
        
        let tree5 = this.createTree([], TreeNode2);
        this.runTest(
            'Example 2: []',
            0,
            solution2.maxDepth(tree5)
        );

        // Test 3: Diameter of Binary Tree
        console.log('\n📋 Test 3: Diameter of Binary Tree');
        const solution3 = new Solution3();
        
        let tree6 = this.createTree([1,null,2,3,4,5], TreeNode3);
        this.runTest(
            'Example 1: [1,null,2,3,4,5]',
            3,
            solution3.diameterOfBinaryTree(tree6)
        );
        
        let tree7 = this.createTree([1,2,3], TreeNode3);
        this.runTest(
            'Example 2: [1,2,3]',
            2,
            solution3.diameterOfBinaryTree(tree7)
        );

        // Test 4: Lowest Common Ancestor in BST
        console.log('\n📋 Test 4: Lowest Common Ancestor in BST');
        const solution4 = new Solution4();
        
        let tree8 = this.createTree([5,3,8,1,4,7,9,null,2], TreeNode4);
        let p1 = this.findNode(tree8, 3);
        let q1 = this.findNode(tree8, 8);
        this.runTest(
            'Example 1: p=3, q=8',
            5,
            solution4.lowestCommonAncestor(tree8, p1, q1).val
        );
        
        let tree9 = this.createTree([5,3,8,1,4,7,9,null,2], TreeNode4);
        let p2 = this.findNode(tree9, 3);
        let q2 = this.findNode(tree9, 4);
        this.runTest(
            'Example 2: p=3, q=4',
            3,
            solution4.lowestCommonAncestor(tree9, p2, q2).val
        );

        // Test 5: Level Order Traversal
        console.log('\n📋 Test 5: Binary Tree Level Order Traversal');
        const solution5 = new Solution5();
        
        let tree10 = this.createTree([1,2,3,4,5,6,7], TreeNode5);
        this.runTest(
            'Example 1: [1,2,3,4,5,6,7]',
            [[1],[2,3],[4,5,6,7]],
            solution5.levelOrder(tree10)
        );
        
        let tree11 = this.createTree([1], TreeNode5);
        this.runTest(
            'Example 2: [1]',
            [[1]],
            solution5.levelOrder(tree11)
        );
        
        let tree12 = this.createTree([], TreeNode5);
        this.runTest(
            'Example 3: []',
            [],
            solution5.levelOrder(tree12)
        );

        // Print summary
        console.log('\n' + '='.repeat(50));
        console.log('📊 Test Summary:');
        console.log(`✅ Passed: ${this.passed}`);
        console.log(`❌ Failed: ${this.failed}`);
        console.log(`📈 Total: ${this.total}`);
        console.log(`🎯 Success Rate: ${((this.passed / this.total) * 100).toFixed(1)}%`);
        
        if (this.failed === 0) {
            console.log('\n🎉 All tests passed! Great job!');
        } else {
            console.log('\n⚠️  Some tests failed. Please review the implementations.');
        }
    }
}

// Run the tests
const testRunner = new TestRunner();
testRunner.runAllTests();
