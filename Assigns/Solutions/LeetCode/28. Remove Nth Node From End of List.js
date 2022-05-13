/* Remove Nth Node From End of List(https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:

->  The number of nodes in the list is sz.
->  1 <= sz <= 30
->  0 <= Node.val <= 100
->  1 <= n <= sz
*/


var removeNthFromEnd = function(head, n) {
    let temp = head;
    let count = 0;
    while (temp != null) {count++; temp = temp.next;}
    console.log(count)
    let target = count-n;
    let temp2 = head;
    
    let getTarget = function(index) {
        let node = head;
        for (let i = 0; i < index; i++) {node = node.next;}
        return node;
    };
    let deleteFirst = function() {
        let val = head.val;
        head = head.next;
        if (head == null) {let tail = null;}
        count--;
        return val;
    };
    let deleteLast = function() {
        if (count <= 1) {return deleteFirst();}
        let secondLast = getTarget(count - 2);
        let tail = secondLast;
        let val = tail.val;
        tail.next = null;
        count--;
        return val;
    };
    let deleteNode = function(index) {
        if (index == 0) {return deleteFirst();}
        if (index == count - 1) {return deleteLast();}
        let prev = getTarget(index - 1);
        let val = prev.next.val;
        prev.next = prev.next.next;
        count--;
        return val;
    };
    let t = deleteNode(target);
    return head;
};


//OR
//Better solution
var removeNthFromEnd = function(head, n) {
    let hare = head;
    let lagger = head;
    
    // drive hare pointer to it's proper position before moving the lagger pointer
    for(let i =0; i < n; i++){
        hare = hare.next;
    }
    
    //edge case where n = LL length. if when trying to go n steps, it falls out of bounds
    //so this means that n is the length of the LL, meaning they want to delete the first node
    if (!hare){
        return head.next;
    } 
    
    // drives both lagger and hare nodes to the end of the linked list, maintaining the gap
    while (hare && hare.next){ 
        lagger = lagger.next; 
        hare = hare.next;
    }
    
    // deletes the appropriate node
    // (since edge case is already dealt with, we can assume that lagger.next.next either exists, or will be 
    //  null in the case that you're deleting the last node)
    lagger.next = lagger.next.next; 
    
    return head;
};

