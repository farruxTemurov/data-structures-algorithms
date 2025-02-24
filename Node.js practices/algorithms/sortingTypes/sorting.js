let p1 = { "pid": 100, "pname": "Tv", "cost": 200, "brand": "Samsung" };
let p2 = { "pid": 121, "pname": "pen", "cost": 7, "brand": "bik" };
let p3 = { "pid": 110, "pname": "pencil", "cost": 12, "brand": "bluee" };
let p4 = { "pid": 107, "pname": "laptop", "cost": 3700, "brand": "ASUS" };

let productsArr = [p1, p2, p3, p4];

console.log(` Products before sorting`);
for (let i = 0; i < productsArr.length; i++) {
    console.log(productsArr[i]);
}

productsArr.sort((p1, p2) => p1.pid - p2.pid); // ascending order by id;
productsArr.sort((p1, p2) => p2.pid - p1.pid); // descending order by id;
productsArr.sort((p1, p2) => p1.pname.localeCompare(p2.pname)); // ascending order by name;
// productsArr.sort((p1, p2) => p2.pname.localeCompare(p1.pname)); // descending order by name;

console.log("~~~~~~~~~~~~~~~~~~~");
for (let i = 0; i < productsArr.length; i++) {
    console.log(productsArr[i]);
}
