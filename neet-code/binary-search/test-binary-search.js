/**
 * Test Runner for Binary Search Solutions
 */

import Solution1 from './binary-search.js';
import Solution2 from './search-2d-matrix.js';
import Solution3 from './koko-eating-bananas.js';
import Solution4 from './find-minimum-in-rotated-sorted-array.js';
import Solution5 from './search-in-rotated-sorted-array.js';

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

    runAllTests() {
        console.log('🚀 Running Binary Search Solutions Tests\n');
        console.log('='.repeat(50));

        // Test 1: Binary Search
        console.log('\n📋 Test 1: Binary Search');
        const solution1 = new Solution1();
        
        this.runTest(
            'Example 1: nums=[-1,0,2,4,6,8], target=4',
            3,
            solution1.search([-1, 0, 2, 4, 6, 8], 4)
        );
        
        this.runTest(
            'Example 2: nums=[-1,0,2,4,6,8], target=3',
            -1,
            solution1.search([-1, 0, 2, 4, 6, 8], 3)
        );

        // Test 2: Search 2D Matrix
        console.log('\n📋 Test 2: Search 2D Matrix');
        const solution2 = new Solution2();
        
        this.runTest(
            'Example 1: target=10',
            true,
            solution2.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 10)
        );
        
        this.runTest(
            'Example 2: target=15',
            false,
            solution2.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 15)
        );

        // Test 3: Koko Eating Bananas
        console.log('\n📋 Test 3: Koko Eating Bananas');
        const solution3 = new Solution3();
        
        this.runTest(
            'Example 1: piles=[1,4,3,2], h=9',
            2,
            solution3.minEatingSpeed([1, 4, 3, 2], 9)
        );
        
        this.runTest(
            'Example 2: piles=[25,10,23,4], h=4',
            25,
            solution3.minEatingSpeed([25, 10, 23, 4], 4)
        );

        // Test 4: Find Minimum in Rotated Sorted Array
        console.log('\n📋 Test 4: Find Minimum in Rotated Sorted Array');
        const solution4 = new Solution4();
        
        this.runTest(
            'Example 1: [3,4,5,6,1,2]',
            1,
            solution4.findMin([3, 4, 5, 6, 1, 2])
        );
        
        this.runTest(
            'Example 2: [4,5,0,1,2,3]',
            0,
            solution4.findMin([4, 5, 0, 1, 2, 3])
        );
        
        this.runTest(
            'Example 3: [4,5,6,7]',
            4,
            solution4.findMin([4, 5, 6, 7])
        );

        // Test 5: Search in Rotated Sorted Array
        console.log('\n📋 Test 5: Search in Rotated Sorted Array');
        const solution5 = new Solution5();
        
        this.runTest(
            'Example 1: nums=[3,4,5,6,1,2], target=1',
            4,
            solution5.search([3, 4, 5, 6, 1, 2], 1)
        );
        
        this.runTest(
            'Example 2: nums=[3,5,6,0,1,2], target=4',
            -1,
            solution5.search([3, 5, 6, 0, 1, 2], 4)
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
