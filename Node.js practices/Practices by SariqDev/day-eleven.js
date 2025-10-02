// Dijkstra's algorithm
// purpose: to find the shortest path in weighted graphs

function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();

  // initialize all distances to Infinity, except start
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    // find the unvisited node with the smallest distance
    let currentNode = null;
    let smallestDistance = Infinity;

    for (let node in distances) {
      if (!visited.has(node) && distances[node] < smallestDistance) {
        smallestDistance = distances[node];
        currentNode = node;
      }
    }

    if (currentNode === null) break; // all reachable nodes visited
    visited.add(currentNode);

    // update neighbors
    for (let neighbor in graph[currentNode]) {
      let newDist = distances[currentNode] + graph[currentNode][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 1, D: 4 },
  B: { A: 1, C: 2, E: 5 },
  C: { B: 2 },
  D: { A: 4, E: 1 },
  E: { B: 5, D: 1 }
};

console.log(dijkstra(graph, "A"));
