/**
 * Reverse Linked List
 * Given the head of a singly linked list, reverse the list and return the new head.
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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;
        
        while (current !== null) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        
        return prev;
    }
}

export { ListNode, Solution as default };
