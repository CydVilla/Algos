/**
 * Permutation in String
 * You are given two strings s1 and s2.
 * Return true if s2 contains a permutation of s1, or false otherwise.
 * 
 * Time Complexity: O(n) where n is the length of s2
 * Space Complexity: O(1) - fixed size arrays for 26 letters
 */
class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        // Create frequency arrays for s1 and current window in s2
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        
        // Fill frequency array for s1 and initial window in s2
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }
        
        // Check if initial window matches
        if (this.matches(s1Count, s2Count)) {
            return true;
        }
        
        // Slide the window through s2
        for (let i = s1.length; i < s2.length; i++) {
            // Add new character to window
            s2Count[s2.charCodeAt(i) - 97]++;
            
            // Remove leftmost character from window
            s2Count[s2.charCodeAt(i - s1.length) - 97]--;
            
            // Check if current window matches
            if (this.matches(s1Count, s2Count)) {
                return true;
            }
        }
        
        return false;
    }
    
    matches(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}

export default Solution;
