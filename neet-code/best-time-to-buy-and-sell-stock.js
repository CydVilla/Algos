/**
 * Best Time to Buy and Sell Stock
 * You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
 * You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
 * Return the maximum profit you can achieve.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        
        for (let i = 1; i < prices.length; i++) {
            // Calculate profit if we sell at current price
            const profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
            
            // Update minimum price seen so far
            minPrice = Math.min(minPrice, prices[i]);
        }
        
        return maxProfit;
    }
}

export default Solution;
