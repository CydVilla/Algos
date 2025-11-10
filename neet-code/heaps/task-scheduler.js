/**
 * Task Scheduler
 * Return the minimum number of CPU cycles required to complete all tasks
 * with cooldown period n between identical tasks.
 * 
 * Time Complexity: O(m) where m is total cycles
 * Space Complexity: O(1) - at most 26 tasks
 */

class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Count frequency of each task
        const freq = new Array(26).fill(0);
        for (let task of tasks) {
            freq[task.charCodeAt(0) - 65]++;
        }
        
        // Sort frequencies in descending order
        freq.sort((a, b) => b - a);
        
        // Calculate idle slots based on most frequent task
        const maxFreq = freq[0];
        let idleSlots = (maxFreq - 1) * n;
        
        // Fill idle slots with other tasks
        for (let i = 1; i < 26; i++) {
            if (freq[i] === 0) break;
            // Use min to avoid over-counting for tasks with same max frequency
            idleSlots -= Math.min(freq[i], maxFreq - 1);
        }
        
        // If idle slots remain, add them to total tasks
        // Otherwise, just return the number of tasks
        return Math.max(0, idleSlots) + tasks.length;
    }
}

export default Solution;
