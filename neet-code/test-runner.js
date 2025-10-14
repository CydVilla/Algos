/**
 * Test Runner for NeetCode Solutions
 * Runs all test cases for the implemented solutions
 */

import Solution1 from './contains-duplicate.js';
import Solution2 from './valid-anagram.js';
import Solution3 from './two-sum.js';
import Solution4 from './group-anagrams.js';
import Solution5 from './top-k-frequent-elements.js';
import Solution6 from './valid-palindrome.js';
import Solution7 from './two-integer-sum-ii.js';
import Solution8 from './three-sum.js';
import Solution9 from './container-with-most-water.js';
import Solution10 from './trapping-rain-water.js';
import Solution11 from './best-time-to-buy-and-sell-stock.js';
import Solution12 from './longest-substring-without-repeating-characters.js';
import Solution13 from './longest-repeating-character-replacement.js';
import Solution14 from './permutation-in-string.js';
import Solution15 from './valid-parentheses.js';
import MinStack from './min-stack.js';
import Solution17 from './evaluate-reverse-polish-notation.js';
import Solution18 from './generate-parentheses.js';
import Solution19 from './daily-temperatures.js';
import Solution20 from './car-fleet.js';
import Solution21 from './largest-rectangle-in-histogram.js';

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

        // Test 6: Valid Palindrome
        console.log('\n📋 Test 6: Valid Palindrome');
        const solution6 = new Solution6();
        
        this.runTest(
            'Example 1: "Was it a car or a cat I saw?"',
            solution6.isPalindrome,
            true,
            solution6.isPalindrome("Was it a car or a cat I saw?")
        );
        
        this.runTest(
            'Example 2: "tab a cat"',
            solution6.isPalindrome,
            false,
            solution6.isPalindrome("tab a cat")
        );

        // Test 7: Two Integer Sum II
        console.log('\n📋 Test 7: Two Integer Sum II');
        const solution7 = new Solution7();
        
        this.runTest(
            'Example 1: [1,2,3,4], target=3',
            solution7.twoSum,
            [1, 2],
            solution7.twoSum([1, 2, 3, 4], 3)
        );

        // Test 8: 3Sum
        console.log('\n📋 Test 8: 3Sum');
        const solution8 = new Solution8();
        
        this.runTest(
            'Example 1: [-1,0,1,2,-1,-4]',
            solution8.threeSum,
            [[-1, -1, 2], [-1, 0, 1]],
            solution8.threeSum([-1, 0, 1, 2, -1, -4])
        );
        
        this.runTest(
            'Example 2: [0,1,1]',
            solution8.threeSum,
            [],
            solution8.threeSum([0, 1, 1])
        );
        
        this.runTest(
            'Example 3: [0,0,0]',
            solution8.threeSum,
            [[0, 0, 0]],
            solution8.threeSum([0, 0, 0])
        );

        // Test 9: Container With Most Water
        console.log('\n📋 Test 9: Container With Most Water');
        const solution9 = new Solution9();
        
        this.runTest(
            'Example 1: [1,7,2,5,4,7,3,6]',
            solution9.maxArea,
            36,
            solution9.maxArea([1, 7, 2, 5, 4, 7, 3, 6])
        );
        
        this.runTest(
            'Example 2: [2,2,2]',
            solution9.maxArea,
            4,
            solution9.maxArea([2, 2, 2])
        );

        // Test 10: Trapping Rain Water
        console.log('\n📋 Test 10: Trapping Rain Water');
        const solution10 = new Solution10();
        
        this.runTest(
            'Example 1: [0,2,0,3,1,0,1,3,2,1]',
            solution10.trap,
            9,
            solution10.trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1])
        );

        // Test 11: Best Time to Buy and Sell Stock
        console.log('\n📋 Test 11: Best Time to Buy and Sell Stock');
        const solution11 = new Solution11();
        
        this.runTest(
            'Example 1: [10,1,5,6,7,1]',
            solution11.maxProfit,
            6,
            solution11.maxProfit([10, 1, 5, 6, 7, 1])
        );
        
        this.runTest(
            'Example 2: [10,8,7,5,2]',
            solution11.maxProfit,
            0,
            solution11.maxProfit([10, 8, 7, 5, 2])
        );

        // Test 12: Longest Substring Without Repeating Characters
        console.log('\n📋 Test 12: Longest Substring Without Repeating Characters');
        const solution12 = new Solution12();
        
        this.runTest(
            'Example 1: "zxyzxyz"',
            solution12.lengthOfLongestSubstring,
            3,
            solution12.lengthOfLongestSubstring("zxyzxyz")
        );
        
        this.runTest(
            'Example 2: "xxxx"',
            solution12.lengthOfLongestSubstring,
            1,
            solution12.lengthOfLongestSubstring("xxxx")
        );

        // Test 13: Longest Repeating Character Replacement
        console.log('\n📋 Test 13: Longest Repeating Character Replacement');
        const solution13 = new Solution13();
        
        this.runTest(
            'Example 1: "XYYX", k=2',
            solution13.characterReplacement,
            4,
            solution13.characterReplacement("XYYX", 2)
        );
        
        this.runTest(
            'Example 2: "AAABABB", k=1',
            solution13.characterReplacement,
            5,
            solution13.characterReplacement("AAABABB", 1)
        );

        // Test 14: Permutation in String
        console.log('\n📋 Test 14: Permutation in String');
        const solution14 = new Solution14();
        
        this.runTest(
            'Example 1: s1="abc", s2="lecabee"',
            solution14.checkInclusion,
            true,
            solution14.checkInclusion("abc", "lecabee")
        );
        
        this.runTest(
            'Example 2: s1="abc", s2="lecaabee"',
            solution14.checkInclusion,
            false,
            solution14.checkInclusion("abc", "lecaabee")
        );

        // Test 15: Valid Parentheses
        console.log('\n📋 Test 15: Valid Parentheses');
        const solution15 = new Solution15();
        
        this.runTest(
            'Example 1: "[]"',
            solution15.isValid,
            true,
            solution15.isValid("[]")
        );
        
        this.runTest(
            'Example 2: "([{}])"',
            solution15.isValid,
            true,
            solution15.isValid("([{}])")
        );
        
        this.runTest(
            'Example 3: "[(])"',
            solution15.isValid,
            false,
            solution15.isValid("[(])")
        );

        // Test 16: Minimum Stack
        console.log('\n📋 Test 16: Minimum Stack');
        const minStack = new MinStack();
        minStack.push(1);
        minStack.push(2);
        minStack.push(0);
        
        this.runTest(
            'getMin() after push(1,2,0)',
            null,
            0,
            minStack.getMin()
        );
        
        minStack.pop();
        
        this.runTest(
            'top() after pop()',
            null,
            2,
            minStack.top()
        );
        
        this.runTest(
            'getMin() after pop()',
            null,
            1,
            minStack.getMin()
        );

        // Test 17: Evaluate Reverse Polish Notation
        console.log('\n📋 Test 17: Evaluate Reverse Polish Notation');
        const solution17 = new Solution17();
        
        this.runTest(
            'Example 1: ["1","2","+","3","*","4","-"]',
            solution17.evalRPN,
            5,
            solution17.evalRPN(["1","2","+","3","*","4","-"])
        );

        // Test 18: Generate Parentheses
        console.log('\n📋 Test 18: Generate Parentheses');
        const solution18 = new Solution18();
        
        this.runTest(
            'Example 1: n=1',
            solution18.generateParenthesis,
            ["()"],
            solution18.generateParenthesis(1)
        );
        
        const result18_2 = solution18.generateParenthesis(3);
        const expected18_2 = ["((()))","(()())","(())()","()(())","()()()"];
        
        this.runTest(
            'Example 2: n=3',
            solution18.generateParenthesis,
            expected18_2.sort(),
            result18_2.sort()
        );

        // Test 19: Daily Temperatures
        console.log('\n📋 Test 19: Daily Temperatures');
        const solution19 = new Solution19();
        
        this.runTest(
            'Example 1: [30,38,30,36,35,40,28]',
            solution19.dailyTemperatures,
            [1,4,1,2,1,0,0],
            solution19.dailyTemperatures([30,38,30,36,35,40,28])
        );
        
        this.runTest(
            'Example 2: [22,21,20]',
            solution19.dailyTemperatures,
            [0,0,0],
            solution19.dailyTemperatures([22,21,20])
        );

        // Test 20: Car Fleet
        console.log('\n📋 Test 20: Car Fleet');
        const solution20 = new Solution20();
        
        this.runTest(
            'Example 1: target=10, position=[1,4], speed=[3,2]',
            solution20.carFleet,
            1,
            solution20.carFleet(10, [1,4], [3,2])
        );
        
        this.runTest(
            'Example 2: target=10, position=[4,1,0,7], speed=[2,2,1,1]',
            solution20.carFleet,
            3,
            solution20.carFleet(10, [4,1,0,7], [2,2,1,1])
        );

        // Test 21: Largest Rectangle In Histogram
        console.log('\n📋 Test 21: Largest Rectangle In Histogram');
        const solution21 = new Solution21();
        
        this.runTest(
            'Example 1: [7,1,7,2,2,4]',
            solution21.largestRectangleArea,
            8,
            solution21.largestRectangleArea([7,1,7,2,2,4])
        );
        
        this.runTest(
            'Example 2: [1,3,7]',
            solution21.largestRectangleArea,
            7,
            solution21.largestRectangleArea([1,3,7])
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
