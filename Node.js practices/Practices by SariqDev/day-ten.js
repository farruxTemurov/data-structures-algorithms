// Breadth-first search in grapghs
// Maqsad: A va B orasida eng qisqa yo'lni topish

/*const bfs = function (graph, start) {
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
bfs(graph, "A");*/


// function to find target person
function search(graph, startNode, target = "elon musk") {
    let queue = [...graph[startNode]];   // start with the neighbor of startNode
    let searched = new Set();  // mark if the node has been searched to avoid loops (looking at the same person over and over)

    while (queue.length > 0) {  // if there is at least one person
        let person = queue.shift();  // get sb from the beginning of the neighbors of the startNode

        if (!searched.has(person)) { // if we haven't yet loooked in the person
            if (person === target) {
                console.log(`Biz ${target}ni topdik`);
            } else {
                queue.push(...graph[person]); // if the person doesn't match the target, we add his neighbors to the queue
                searched.add(person); // mark him searched
            }
        }
    }
    return false;
}

const graph = {
    siz: ["ali", "vali", "tohir"],
    ali: ["aziza", "olim"],
    vali: ["botir", "ziyoda"],
    tohir: ["elon musk", "mohir"],
    olim: [],
    aziza: [],
    botir: [],
    ziyoda: ["aziza"],
    "elon musk": [],
    mohir: []
};

console.log(search(graph, "siz"));
console.log(search(graph, "ali", "vali"));


