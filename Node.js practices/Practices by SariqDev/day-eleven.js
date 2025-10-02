// Dijkstra's algorithm
// purpose: to find the shortest path in weighted graphs

function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    while (visited.size < Object.keys(graph).length) {
        let currentNode = null;
        let smallestDistance = Infinity;

        for (let node in distances) {
            if (!visited.has(node) && distances[node] < smallestDistance) {
                smallestDistance = distances[node];
                currentNode = node;
            }
        }

        if (currentNode = null) break;
        visited.add(currentNode);

        for (let neighbor in graph[currentNode]) {
            let newDist = distances[currentNode] + graph[currentNode][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
            }
        }
    }
    return distances;
}

