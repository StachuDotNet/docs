# Weakly Connected Components

The wcc.py query module can run WCC analysis on a sub-graph of the whole graph.

## wcc.get\_components\(vertices: mgp.List.mgp.Vertex, edges: mgp.List.mgp.Edge\)

This procedure finds weakly connected components of a given subgraph of a directed graph.

The subgraph is defined by a list of vertices and a list of edges which are passed as arguments of the procedure.

**Parameters**

* **vertices** \(_mgp.List\[mgp.Vertex\]_\) – A set of vertices of a subgraph containing all vertices provided in a

  list of vertices along with all vertices that are endpoints of provided edges.

* **edges** \(_mgp.List\[mgp.Edge\]_\) – A set of edges of a subgraph contains all edges from the list of provided edges.

**Returns**

The procedure returns 2 fields. The first, `n_components`, is the number of weakly connected components of the subgraph. The second, `components`, is a list of weakly connected components. Each component is given as a list of `mgp.Vertex` objects from that component.

**Return type**

mgp.Record\(n\_components=int, components=mgp.List\[mgp.List\[mgp.Vertex\]\]\)

## Examples

For example, weakly connected components in a subgraph formed from all vertices labeled `Person` and edges between such vertices can be obtained using the following openCypher query: `MATCH (n:Person)-[e]->(m:Person) WITH collect(n) AS nodes, collect(e) AS edges CALL wcc.get_components(nodes, edges) YIELD * RETURN n_components, components;`

