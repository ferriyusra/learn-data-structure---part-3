function createNode(key) {

    const neighbors = []

    return {
        key,
        neighbors,

        // addNeighbor
        addNeighbor: function (node) {
            neighbors.push(node)
        }
    }
}


function createGraph(directed = false) {

    const nodes = []
    const edges = []

    return {
        directed,
        nodes,
        edges,

        // addNode
        addNode: function (key) {
            const newNode = createNode(key)
            nodes.push(newNode)
        },
        // getNode
        getNode: function (key) {
            return nodes.find(function (node) {
                return node.key === key
            })
        },

        // addEdge
        // hubungan satu node dengan node yang lain
        addEdge: function (node1key, node2key) {
            const node1 = this.getNode(node1key)
            const node2 = this.getNode(node2key)

            node1.addNeighbor(node2)

            if (!directed) {
                node2.addNeighbor(node1)
            }
        },
        // print
        print: function () {
            return nodes.map(function ({ key, neighbors }) {
                let result = key

                if (neighbors.length) {
                    result += ` => ${neighbors.map(function (neighbor) {
                        return neighbor.key
                    }).join(' ')}`
                }
                return result
            }).join('\n')
        }
    }
}

// tambah graph
const graph = createGraph(true)

// membuat titik node
graph.addNode('ferri')
graph.addNode('usro')
graph.addNode('eka')
graph.addNode('widya')
graph.addNode('ningsih')
graph.addNode('yusra')

// relasi pertemanan
graph.addEdge('ferri', 'usro')
graph.addEdge('usro', 'eka')
graph.addEdge('usro', 'widya')
graph.addEdge('ferri', 'widya')
graph.addEdge('widya', 'yusra')
graph.addEdge('ningsih', 'yusra')
graph.addEdge('yusra', 'ferri')

console.log(graph.print());

// hasil
// ferri => usro widya
// usro => eka widya  
// eka
// widya => yusra     
// ningsih => yusra   
// yusra => ferri     