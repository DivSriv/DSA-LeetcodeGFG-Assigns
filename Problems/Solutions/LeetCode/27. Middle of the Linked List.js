/* Middle of the Linked List(https://leetcode.com/problems/middle-of-the-linked-list/)

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:

->  The number of nodes in the list is in the range [1, 100].
->  1 <= Node.val <= 100
*/


var middleNode = function(head) {
    // let temp = head;
    // let count = 0;
    // while (temp != null){count++; temp = temp.next;}
    // let target = Math.floor(count/2);
    //     let getTarget = function(index){
    //         for (let i = 0; i < index; i++){head = head.next;}
    //         return head;
    //     };
    // return getTarget(target);
    
    
    
    //Leetcode bettter solution
    // let [slow,fast] = [head, head];
    // while (fast && fast.next) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }
    // return slow;
    
    
    
    //Another solution
    if(head==null || head.next==null){return head}
    
    let midPrev = null
    while(head != null && head.next != null) {
        midPrev = (midPrev == null) ? head : midPrev.next
        head = head.next.next
    }
    let mid = midPrev.next
    midPrev.next = null
    return mid    
};
