/**
 * Merge Two Sorted Linked Lists
 * Merge two sorted linked lists into one sorted list.
 * 
 * Time Complexity: O(n + m)
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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Create a dummy node to simplify edge cases
        const dummy = new ListNode();
        let current = dummy;
        
        // Merge while both lists have nodes
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        
        // Attach remaining nodes
        if (list1 !== null) {
            current.next = list1;
        } else {
            current.next = list2;
        }
        
        return dummy.next;
    }
}

export { ListNode, Solution as default };
