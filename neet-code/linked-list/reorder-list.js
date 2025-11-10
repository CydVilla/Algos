/**
 * Reorder Linked List
 * Reorder list from [0,1,2,3,4,5] to [0,5,1,4,2,3]
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
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;
        
        // Step 1: Find the middle of the list
        let slow = head;
        let fast = head;
        
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // Step 2: Reverse the second half
        let second = slow.next;
        slow.next = null; // Split the list
        
        let prev = null;
        while (second !== null) {
            const nextNode = second.next;
            second.next = prev;
            prev = second;
            second = nextNode;
        }
        second = prev;
        
        // Step 3: Merge the two halves
        let first = head;
        while (second !== null) {
            const tmp1 = first.next;
            const tmp2 = second.next;
            
            first.next = second;
            second.next = tmp1;
            
            first = tmp1;
            second = tmp2;
        }
    }
}

export { ListNode, Solution as default };
