/**
 * Valid Palindrome
 * Given a string s, return true if it is a palindrome, otherwise return false.
 * A palindrome is a string that reads the same forward and backward.
 * It is also case-insensitive and ignores all non-alphanumeric characters.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        
        while (left < right) {
            // Skip non-alphanumeric characters from left
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }
            
            // Skip non-alphanumeric characters from right
            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }
            
            // Compare characters (case-insensitive)
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
    
    isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) ||  // 0-9
               (code >= 65 && code <= 90) ||  // A-Z
               (code >= 97 && code <= 122);   // a-z
    }
}

export default Solution;
