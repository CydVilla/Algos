/**
 * Car Fleet
 * Given target position and arrays of position and speed, 
 * return the number of car fleets that will arrive at the destination.
 * 
 * Time Complexity: O(n log n) - due to sorting
 * Space Complexity: O(n)
 */
class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // Create array of [position, speed] pairs and sort by position (descending)
        const cars = position.map((pos, i) => [pos, speed[i]])
                             .sort((a, b) => b[0] - a[0]);
        
        const stack = [];
        
        for (let [pos, spd] of cars) {
            // Calculate time to reach target
            const time = (target - pos) / spd;
            
            // If this car takes longer than the car in front (or stack is empty),
            // it forms a new fleet
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
            // Otherwise, this car catches up and becomes part of the fleet ahead
        }
        
        return stack.length;
    }
}

export default Solution;
