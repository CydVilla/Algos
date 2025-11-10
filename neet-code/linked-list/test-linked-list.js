/**
 * Test Runner for Linked List Solutions
 */

import Solution1, { ListNode as ListNode1 } from './reverse-linked-list.js';
import Solution2, { ListNode as ListNode2 } from './merge-two-sorted-lists.js';
import Solution3, { ListNode as ListNode3 } from './linked-list-cycle.js';
import Solution4, { ListNode as ListNode4 } from './reorder-list.js';
import Solution5, { ListNode as ListNode5 } from './remove-nth-node-from-end.js';

class TestRunner {
    constructor() {
        this.passed = 0;
        this.failed = 0;
        this.total = 0;
    }

    // Helper function to create linked list from array
    createList(arr, ListNode) {
        if (arr.length === 0) return null;
        const head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    // Helper function to convert linked list to array
    listToArray(head) {
        const result = [];
        let current = head;
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }

    // Helper function to create a cycle
    createCycle(head, index) {
        if (index === -1 || !head) return;
        let tail = head;
        let cycleNode = null;
        let i = 0;
        
        while (tail.next !== null) {
            if (i === index) cycleNode = tail;
            tail = tail.next;
            i++;
        }
        
        if (i === index) cycleNode = tail;
        if (cycleNode) tail.next = cycleNode;
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
        console.log('🚀 Running Linked List Solutions Tests\n');
        console.log('='.repeat(50));

        // Test 1: Reverse Linked List
        console.log('\n📋 Test 1: Reverse Linked List');
        const solution1 = new Solution1();
        
        let list1 = this.createList([0, 1, 2, 3], ListNode1);
        let result1 = solution1.reverseList(list1);
        this.runTest(
            'Example 1: [0,1,2,3]',
            [3, 2, 1, 0],
            this.listToArray(result1)
        );
        
        let list2 = this.createList([], ListNode1);
        let result2 = solution1.reverseList(list2);
        this.runTest(
            'Example 2: []',
            [],
            this.listToArray(result2)
        );

        // Test 2: Merge Two Sorted Lists
        console.log('\n📋 Test 2: Merge Two Sorted Lists');
        const solution2 = new Solution2();
        
        let list3 = this.createList([1, 2, 4], ListNode2);
        let list4 = this.createList([1, 3, 5], ListNode2);
        let result3 = solution2.mergeTwoLists(list3, list4);
        this.runTest(
            'Example 1: [1,2,4] and [1,3,5]',
            [1, 1, 2, 3, 4, 5],
            this.listToArray(result3)
        );
        
        let list5 = this.createList([], ListNode2);
        let list6 = this.createList([1, 2], ListNode2);
        let result4 = solution2.mergeTwoLists(list5, list6);
        this.runTest(
            'Example 2: [] and [1,2]',
            [1, 2],
            this.listToArray(result4)
        );
        
        let list7 = this.createList([], ListNode2);
        let list8 = this.createList([], ListNode2);
        let result5 = solution2.mergeTwoLists(list7, list8);
        this.runTest(
            'Example 3: [] and []',
            [],
            this.listToArray(result5)
        );

        // Test 3: Linked List Cycle
        console.log('\n📋 Test 3: Linked List Cycle Detection');
        const solution3 = new Solution3();
        
        let list9 = this.createList([1, 2, 3, 4], ListNode3);
        this.createCycle(list9, 1);
        this.runTest(
            'Example 1: [1,2,3,4] with cycle at index 1',
            true,
            solution3.hasCycle(list9)
        );
        
        let list10 = this.createList([1, 2], ListNode3);
        this.createCycle(list10, -1);
        this.runTest(
            'Example 2: [1,2] with no cycle',
            false,
            solution3.hasCycle(list10)
        );

        // Test 4: Reorder List
        console.log('\n📋 Test 4: Reorder Linked List');
        const solution4 = new Solution4();
        
        let list11 = this.createList([2, 4, 6, 8], ListNode4);
        solution4.reorderList(list11);
        this.runTest(
            'Example 1: [2,4,6,8]',
            [2, 8, 4, 6],
            this.listToArray(list11)
        );
        
        let list12 = this.createList([2, 4, 6, 8, 10], ListNode4);
        solution4.reorderList(list12);
        this.runTest(
            'Example 2: [2,4,6,8,10]',
            [2, 10, 4, 8, 6],
            this.listToArray(list12)
        );

        // Test 5: Remove Nth Node From End
        console.log('\n📋 Test 5: Remove Node From End of Linked List');
        const solution5 = new Solution5();
        
        let list13 = this.createList([1, 2, 3, 4], ListNode5);
        let result6 = solution5.removeNthFromEnd(list13, 2);
        this.runTest(
            'Example 1: [1,2,3,4], n=2',
            [1, 2, 4],
            this.listToArray(result6)
        );
        
        let list14 = this.createList([5], ListNode5);
        let result7 = solution5.removeNthFromEnd(list14, 1);
        this.runTest(
            'Example 2: [5], n=1',
            [],
            this.listToArray(result7)
        );
        
        let list15 = this.createList([1, 2], ListNode5);
        let result8 = solution5.removeNthFromEnd(list15, 2);
        this.runTest(
            'Example 3: [1,2], n=2',
            [2],
            this.listToArray(result8)
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
