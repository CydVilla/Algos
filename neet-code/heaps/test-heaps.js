/**
 * Test Runner for Heaps/Priority Queue Solutions
 */

import KthLargest from './kth-largest-in-stream.js';
import Solution2 from './last-stone-weight.js';
import Solution3 from './k-closest-points-to-origin.js';
import Solution4 from './kth-largest-element-in-array.js';
import Solution5 from './task-scheduler.js';

class TestRunner {
    constructor() {
        this.passed = 0;
        this.failed = 0;
        this.total = 0;
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

    // Helper to check if arrays contain same elements (order doesn't matter)
    arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        const sorted1 = JSON.stringify(arr1.sort());
        const sorted2 = JSON.stringify(arr2.sort());
        return sorted1 === sorted2;
    }

    runAllTests() {
        console.log('🚀 Running Heaps/Priority Queue Solutions Tests\n');
        console.log('='.repeat(50));

        // Test 1: Kth Largest in Stream
        console.log('\n📋 Test 1: Kth Largest Element in a Stream');
        const kthLargest = new KthLargest(3, [1, 2, 3, 3]);
        
        this.runTest(
            'add(3)',
            3,
            kthLargest.add(3)
        );
        
        this.runTest(
            'add(5)',
            3,
            kthLargest.add(5)
        );
        
        this.runTest(
            'add(6)',
            3,
            kthLargest.add(6)
        );
        
        this.runTest(
            'add(7)',
            5,
            kthLargest.add(7)
        );
        
        this.runTest(
            'add(8)',
            6,
            kthLargest.add(8)
        );

        // Test 2: Last Stone Weight
        console.log('\n📋 Test 2: Last Stone Weight');
        const solution2 = new Solution2();
        
        this.runTest(
            'Example 1: [2,3,6,2,4]',
            1,
            solution2.lastStoneWeight([2, 3, 6, 2, 4])
        );
        
        this.runTest(
            'Example 2: [1,2]',
            1,
            solution2.lastStoneWeight([1, 2])
        );

        // Test 3: K Closest Points to Origin
        console.log('\n📋 Test 3: K Closest Points to Origin');
        const solution3 = new Solution3();
        
        const result3_1 = solution3.kClosest([[0,2],[2,2]], 1);
        this.runTest(
            'Example 1: [[0,2],[2,2]], k=1',
            true,
            this.arraysEqual(result3_1, [[0,2]])
        );
        
        const result3_2 = solution3.kClosest([[0,2],[2,0],[2,2]], 2);
        this.runTest(
            'Example 2: [[0,2],[2,0],[2,2]], k=2',
            true,
            this.arraysEqual(result3_2, [[0,2],[2,0]]) || this.arraysEqual(result3_2, [[2,0],[0,2]])
        );

        // Test 4: Kth Largest Element in Array
        console.log('\n📋 Test 4: Kth Largest Element in an Array');
        const solution4 = new Solution4();
        
        this.runTest(
            'Example 1: [2,3,1,5,4], k=2',
            4,
            solution4.findKthLargest([2, 3, 1, 5, 4], 2)
        );
        
        this.runTest(
            'Example 2: [2,3,1,1,5,5,4], k=3',
            4,
            solution4.findKthLargest([2, 3, 1, 1, 5, 5, 4], 3)
        );

        // Test 5: Task Scheduler
        console.log('\n📋 Test 5: Task Scheduler');
        const solution5 = new Solution5();
        
        this.runTest(
            'Example 1: ["X","X","Y","Y"], n=2',
            5,
            solution5.leastInterval(["X","X","Y","Y"], 2)
        );
        
        this.runTest(
            'Example 2: ["A","A","A","B","C"], n=3',
            9,
            solution5.leastInterval(["A","A","A","B","C"], 3)
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
