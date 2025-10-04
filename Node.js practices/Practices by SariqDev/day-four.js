// Selection sort.
// O(n) - qidirish uchun linear searchdan foydalanadi. 
// Ma'lumotlar ro'yxatini saralash uchun eng kattasini/maydasini birinchiga qo'yadi, va shunday davom etib 
// to'liq saralaydi. Hammasi bo'lib O(n^2) bo'ladi.

/*
const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // you can change how it behaves here. if you want, you can sort it in descending order

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};*/

myList = [10, 2, 7, 3, 1];
console.log(selectionSort(myList));

// ascending order example

const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[maxIndex]) {
                maxIndex = i;
            }
        }

        if (maxIndex !== j) {
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }
    }
    return arr;
};

myList = [10, 2, 7, 3, 1];
console.log(selectionSort(myList));


