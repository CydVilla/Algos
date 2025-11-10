/**
 * Remove Node From End of Linked List
 * Remove the nth node from the end of the list and return the head.
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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Create a dummy node to handle edge cases
        const dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;
        
        // Move right pointer n steps ahead
        for (let i = 0; i < n; i++) {
            right = right.next;
        }
        
        // Move both pointers until right reaches the end
        while (right !== null) {
            left = left.next;
            right = right.next;
        }
        
        // Remove the nth node from end
        left.next = left.next.next;
        
        return dummy.next;
    }
}

export { ListNode, Solution as default };
