/**
 * Koko Eating Bananas
 * Given piles of bananas and h hours, find minimum eating rate k
 * such that all bananas can be eaten within h hours.
 * 
 * Time Complexity: O(n log m) where m is max pile size
 * Space Complexity: O(1)
 */
class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;
        
        while (left <= right) {
            const k = Math.floor((left + right) / 2);
            
            // Calculate hours needed at speed k
            let hours = 0;
            for (let pile of piles) {
                hours += Math.ceil(pile / k);
            }
            
            if (hours <= h) {
                // Can finish in time, try slower speed
                result = k;
                right = k - 1;
            } else {
                // Too slow, need faster speed
                left = k + 1;
            }
        }
        
        return result;
    }
}

export default Solution;
