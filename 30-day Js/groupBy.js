// 2631. Group By
Array.prototype.groupBy = function (fn) {
    return this.reduce((grouped, item) => {
        const key = fn(item);

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(item);

        return grouped;
    }, {});
};

const people = [
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'London' },
];

function byCity(person) {
    return person.city;
};

const groupedPeople = people.groupBy(byCity);
console.log(groupedPeople);