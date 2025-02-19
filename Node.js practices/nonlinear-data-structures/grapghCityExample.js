class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // For an undirected graph
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        }
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            // Remove the vertex from all other adjacency lists
            for (let neighbor of this.adjacencyList[vertex]) {
                this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(v => v !== vertex);
            }
            // Delete the vertex
            delete this.adjacencyList[vertex];
        }
    }

    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " ---->  " + this.adjacencyList[vertex].join(", "));
        }
    }
}

// Test the graph
const graph = new Graph();

graph.addVertex("NYC");
graph.addVertex("London");
graph.addVertex("Prague");
graph.addVertex("Tashkent");
graph.printGraph();


graph.addEdge("NYC", "London");
graph.addEdge("NYC", "Prague");
graph.printGraph();


graph.removeEdge("NYC", "London");
graph.removeVertex("Prague");

graph.printGraph();
