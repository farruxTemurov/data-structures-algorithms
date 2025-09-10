// 83. Remove Duplicates from Sorted List

const deleteDuplicates = function (head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

console.log(deleteDuplicates(head));