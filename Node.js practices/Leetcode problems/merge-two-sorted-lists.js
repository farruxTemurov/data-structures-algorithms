function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function buildList(arr) {
    let dummy = new ListNode(-1);
    let cur = dummy;
    for (let val of arr) {
        cur.next = new ListNode(val);
        cur = cur.next;
    }
    return dummy.next;
}

function printList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(-1);
    let cur = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }

    cur.next = list1 !== null ? list1 : list2;
    return dummy.next;
};

let list1 = buildList([1, 2, 4]);
let list2 = buildList([1, 3, 4]);

let merged = mergeTwoLists(list1, list2);
console.log(printList(merged)); // [1, 1, 2, 3, 4, 4]
