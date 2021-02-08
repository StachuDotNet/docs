# nxalg.bridges

## nxalg.bridges\(ctx: mgp.ProcCtx, root: mgp.Nullable.mgp.Vertex = None\)

Returns all bridges in a graph.

A _bridge_ in a graph is an edge whose removal causes the number of connected components of the graph to increase. Equivalently, a bridge is an edge that does not belong to any cycle.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **root** \(_mgp.Nullable\[mgp.Vertex\]_\) – \(default=None\)

  A node in the graph `G`. If specified, only the bridges in the

  connected components containing this node will be returned.

**Returns**

A list of edges in the graph whose removal disconnects the graph \(or causes the number of connected components to increase\).

**Return type**

mgp.Record\(bridges=mgp.List\[mgp.Edge\]\)

