/**
 * Longest Repeating Character Replacement
 * You are given a string s consisting of only uppercase english characters and an integer k.
 * You can choose up to k characters of the string and replace them with any other uppercase English character.
 * After performing at most k replacements, return the length of the longest substring which contains only one distinct character.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(m) where m is the number of unique characters (26 for uppercase English)
 */
class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const charCount = {};
        let left = 0;
        let maxLength = 0;
        let maxFreq = 0;
        
        for (let right = 0; right < s.length; right++) {
            // Add current character to frequency map
            charCount[s[right]] = (charCount[s[right]] || 0) + 1;
            
            // Track the maximum frequency of any character in current window
            maxFreq = Math.max(maxFreq, charCount[s[right]]);
            
            // If window size - max frequency > k, we need to shrink window
            // (window size - max frequency) = number of characters that need to be replaced
            const windowSize = right - left + 1;
            if (windowSize - maxFreq > k) {
                charCount[s[left]]--;
                left++;
            }
            
            // Update max length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}

export default Solution;
