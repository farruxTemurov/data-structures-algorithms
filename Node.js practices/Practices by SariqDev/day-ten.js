// Breadth-first search in grapghs
// Maqsad: A va B orasida eng qisqa yo'lni topish

const bfs = function (graph, start) {
    let visited = new Set(); //keeps track of visited nodes
    let queue = [start]; // queue for bfs
    visited.add(start);

    while (queue.length > 0) {
        let node = queue.shift(); // dequeue
        console.log(node); // process node


        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor); // enqueue
            }
        }
    }
}

// Example graph as adjacency list
const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

// Run BFS
bfs(graph, "A");