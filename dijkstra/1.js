const graph = {
  a: [['b', 7], ['c', 9], ['f', 14]],
  b: [['a', 7], ['c', 10], ['d', 15]],
  c: [['a', 9], ['b', 10], ['d', 11], ['f', 2]],
  d: [['b', 15], ['c', 11], ['e', 6]],
  e: [['d', 6], ['f', 9]],
  f: [['a', 14], ['c', 2], ['e', 9]]
}

function algoDijkstra(graph, edge) {

  function countMinValues(graph, edge, minValues) {
    graph[edge].forEach(el => {
      el[1] + minValues[el[0]][0]  < minValues[edge][0] 
      && (minValues[edge][0] = el[1] + minValues[el[0]][0]);
    });
  }

  const minValues = initialFill(graph, edge);

  for (let key in minValues) {
    graph[key].forEach(el => countMinValues(graph, el[0], minValues));
    minValues[key][1] = true;
  }
  console.log(minValues);
}

function initialFill(graph, edge) {
  const minValues = {};
  for (let key in graph) {
    if (key === edge) {
      minValues[key] = [];
      minValues[key].push(0);
      continue;
    }
    minValues[key] = [];
    minValues[key].push(Infinity);

  }
  return minValues;
}

algoDijkstra(graph, 'a');