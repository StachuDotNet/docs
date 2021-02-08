# nxalg.pagerank

## nxalg.pagerank\(ctx: mgp.ProcCtx, alpha: mgp.Number = 0.85, personalization: mgp.Nullable.str = None, max\_iter: int = 100, tol: mgp.Number = 1e-06, nstart: mgp.Nullable.str = None, weight: mgp.Nullable.str = 'weight', dangling: mgp.Nullable.str = None\)

Returns the PageRank of the nodes in the graph.

_PageRank_ computes a ranking of the nodes in the graph `G` based on the structure of the incoming links. It was originally designed as an algorithm to rank web pages.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **alpha** \(_mgp.Number_\) – \(default=0.85\)

  Damping parameter for PageRank.

* **personalization** \(_mgp.Nullable\[str\]_\) – \(default=None\)

  The “personalization vector” consisting of a dictionary with a

  subset of graph nodes as a key and maps personalization value

  for each subset. At least one personalization value must be non-zero.

  If not specified, a nodes personalization value will be zero.

  By default, a uniform distribution is used.

* **max\_iter** \(_int_\) – \(default=100\)

  Maximum number of iterations in power method eigenvalue solver.

* **tol** \(_mgp.Number_\) – \(default=1e-06\)

  Error tolerance used to check convergence in power method solver.

* **nstart** \(_mgp.Nullable\[str\]_\) – \(default=None\)

  Starting value of PageRank iteration for each node.

* **weight** \(_mgp.Nullable\[str\]_\) – \(default=’weight’\)

  Edge data key to use as weight. If `None`, weights are set to 1.

* **dangling** \(_mgp.Nullable\[str\]_\) – \(default=None\)

  The outedges to be assigned to any “dangling” nodes, i.e., nodes without

  any outedges. The dict key is the node the outedge points to and the dict

  value is the weight of that outedge. By default, dangling nodes are given

  outedges according to the personalization vector \(uniform if not

  specified\). This must be selected to result in an irreducible transition

  matrix. It may be common to have the dangling dict to be the same as

  the personalization dict.

**Returns**

Dictionary of nodes with PageRank as value.

**Return type**

mgp.Record\(node=mgp.Vertex, rank=float\)

