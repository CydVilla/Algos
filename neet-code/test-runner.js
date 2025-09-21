/**
 * Test Runner for NeetCode Solutions
 * Runs all test cases for the implemented solutions
 */

import Solution1 from './contains-duplicate.js';
import Solution2 from './valid-anagram.js';
import Solution3 from './two-sum.js';
import Solution4 from './group-anagrams.js';
import Solution5 from './top-k-frequent-elements.js';

class TestRunner {
    constructor() {
        this.passed = 0;
        this.failed = 0;
        this.total = 0;
    }

    runTest(testName, testFunction, expected, actual) {
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
        console.log('🚀 Running NeetCode Solutions Tests\n');
        console.log('='.repeat(50));

        // Test 1: Contains Duplicate
        console.log('\n📋 Test 1: Contains Duplicate');
        const solution1 = new Solution1();
        
        this.runTest(
            'Example 1: [1,2,3,3]',
            solution1.hasDuplicate,
            true,
            solution1.hasDuplicate([1, 2, 3, 3])
        );
        
        this.runTest(
            'Example 2: [1,2,3,4]',
            solution1.hasDuplicate,
            false,
            solution1.hasDuplicate([1, 2, 3, 4])
        );

        // Test 2: Valid Anagram
        console.log('\n📋 Test 2: Valid Anagram');
        const solution2 = new Solution2();
        
        this.runTest(
            'Example 1: "racecar" vs "carrace"',
            solution2.isAnagram,
            true,
            solution2.isAnagram("racecar", "carrace")
        );
        
        this.runTest(
            'Example 2: "jar" vs "jam"',
            solution2.isAnagram,
            false,
            solution2.isAnagram("jar", "jam")
        );

        // Test 3: Two Sum
        console.log('\n📋 Test 3: Two Sum');
        const solution3 = new Solution3();
        
        this.runTest(
            'Example 1: [3,4,5,6], target=7',
            solution3.twoSum,
            [0, 1],
            solution3.twoSum([3, 4, 5, 6], 7)
        );
        
        this.runTest(
            'Example 2: [4,5,6], target=10',
            solution3.twoSum,
            [0, 2],
            solution3.twoSum([4, 5, 6], 10)
        );
        
        this.runTest(
            'Example 3: [5,5], target=10',
            solution3.twoSum,
            [0, 1],
            solution3.twoSum([5, 5], 10)
        );

        // Test 4: Group Anagrams
        console.log('\n📋 Test 4: Group Anagrams');
        const solution4 = new Solution4();
        
        const result4_1 = solution4.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]);
        const expected4_1 = [["hat"], ["act", "cat"], ["stop", "pots", "tops"]];
        
        // Sort each group and the overall result for comparison
        const normalizeGroups = (groups) => {
            return groups.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
        };
        
        this.runTest(
            'Example 1: ["act","pots","tops","cat","stop","hat"]',
            solution4.groupAnagrams,
            normalizeGroups(expected4_1),
            normalizeGroups(result4_1)
        );
        
        this.runTest(
            'Example 2: ["x"]',
            solution4.groupAnagrams,
            [["x"]],
            solution4.groupAnagrams(["x"])
        );
        
        this.runTest(
            'Example 3: [""]',
            solution4.groupAnagrams,
            [[""]],
            solution4.groupAnagrams([""])
        );

        // Test 5: Top K Frequent Elements
        console.log('\n📋 Test 5: Top K Frequent Elements');
        const solution5 = new Solution5();
        
        this.runTest(
            'Example 1: [1,2,2,3,3,3], k=2',
            solution5.topKFrequent,
            [3, 2],
            solution5.topKFrequent([1, 2, 2, 3, 3, 3], 2)
        );
        
        this.runTest(
            'Example 2: [7,7], k=1',
            solution5.topKFrequent,
            [7],
            solution5.topKFrequent([7, 7], 1)
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
