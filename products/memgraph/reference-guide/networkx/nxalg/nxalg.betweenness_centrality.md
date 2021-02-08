# nxalg.betweenness\_centrality

## nxalg.betweenness\_centrality\(ctx: mgp.ProcCtx, k: mgp.Nullable.int = None, normalized: bool = True, weight: mgp.Nullable.str = None, endpoints: bool = False, seed: mgp.Nullable.int = None\)

Compute the shortest-path betweenness centrality for nodes.

_Betweenness centrality_ is a measure of centrality in a graph based on shortest paths. Centrality identifies the most important nodes within a graph.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **k** \(_mgp.Nullable\[str\]_\) – \(default=None\)

  If `k` is not `None`, use `k` node samples to estimate betweenness.

  The value of `k <= n` where `n` is the number of nodes in the graph.

  Higher values give a better approximation.

* **normalized** \(_bool_\) – \(default=True\)

  If `True` the betweenness values are normalized by `2/((n-1)(n-2))`

  for graphs, and `1/((n-1)(n-2))` for directed graphs where `n`

  is the number of nodes in `G`.

* **weight** \(_mgp.Nullable\[str\]_\) – \(default=None\)

  If `None`, all edge weights are considered equal.

  Otherwise holds the name of the edge attribute used as weight.

* **endpoints** \(_bool_\) – \(default=False\)

  If `True`, includes the endpoints in the shortest path counts.

* **seed** \(_mgp.Nullable\[int\]_\) – \(default=None\)

  Indicator of random number generation state.

  Note that this is only used if `k` is not `None`.

**Returns**

Dictionary of nodes with betweenness centrality as the value.

**Return type**

mgp.Record\(node=mgp.Vertex, betweenness=mgp.Number\)

