/*Reverse alternate K nodes in a Singly Linked List(https://www.geeksforgeeks.org/reverse-alternate-k-nodes-in-a-singly-linked-list/)

//Delete N nodes after M nodes of a linked list
//https://practice.geeksforgeeks.org/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/1/?page=3&category[]=Linked%20List&sortBy=submissions

Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way.


Examples : 

Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
Output:   3->2->1->4->5->6->9->8->7->NULL.
*/

// Solution:


var reverseAlternateKGroup = function(head, k){
    if (k <= 1 || head == null) {
        return head;
    }

    // skip the first left-1 nodes
    let current = head;
    let prev = null;

    while (current != null) {
        let last = prev;
        let newEnd = current;

        // reverse between left and right
        let next = current.next;
        for (let i = 0; current != null && i < k; i++) {
            current.next = prev;
            prev = current;
            current = next;
            if (next != null) {
                next = next.next;
            }
        }

        if (last != null) {
            last.next = prev;
        } else {
            head = prev;
        }

        newEnd.next = current;

        // skip the k nodes
        for (let i = 0; current != null && i < k; i++) {
            prev = current;
            current = current.next;
        }
    }
    return head;
}

