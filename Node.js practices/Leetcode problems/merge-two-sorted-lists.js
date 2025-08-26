var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
    let cur = dummy;

    while (list1 != null && list2 != null) {
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }

    cur.next = (list1 != null ? list1 : list2);
    return dummy.next;
};

list1 = [1, 2, 4];
list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
