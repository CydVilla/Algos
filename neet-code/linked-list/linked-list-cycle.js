/**
 * Linked List Cycle Detection
 * Given the head of a linked list, return true if there is a cycle.
 * Uses Floyd's Cycle Detection Algorithm (Tortoise and Hare).
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head.next) return false;
        
        let slow = head;
        let fast = head;
        
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            
            // If slow and fast meet, there's a cycle
            if (slow === fast) {
                return true;
            }
        }
        
        return false;
    }
}

export { ListNode, Solution as default };
