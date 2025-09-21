class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramMap = new Map();
        
        for (let str of strs) {
            const sortedStr = str.split('').sort().join('');
            
            if (!anagramMap.has(sortedStr)) {
                anagramMap.set(sortedStr, []);
            }
            
            anagramMap.get(sortedStr).push(str);
        }
        
        return Array.from(anagramMap.values());
    }
}

export default Solution;
