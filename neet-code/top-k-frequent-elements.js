class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();
        
        for (let num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }
        
        const sortedByFrequency = Array.from(frequencyMap.entries())
            .sort((a, b) => b[1] - a[1]);
        
        return sortedByFrequency.slice(0, k).map(entry => entry[0]);
    }
}

export default Solution;
