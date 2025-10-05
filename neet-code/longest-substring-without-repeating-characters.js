/**
 * Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without duplicate characters.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(m) where m is the number of unique characters
 */
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let left = 0;
        let maxLength = 0;
        
        for (let right = 0; right < s.length; right++) {
            // If character is already in set, remove characters from left
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }
            
            // Add current character to set
            charSet.add(s[right]);
            
            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}

export default Solution;
