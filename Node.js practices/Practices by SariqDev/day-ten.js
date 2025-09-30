// Breadth-first search in grapghs
// Maqsad: A va B orasida eng qisqa yo'lni topish

const bfs = function (graph, start) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node);


        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}