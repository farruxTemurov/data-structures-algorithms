// 2631. Group By

Array.prototype.groupBy = function () {
    return this.reduce((grouped, item) => {
        const key = fn(item);

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(item);

        return grouped;
    }, {});
}