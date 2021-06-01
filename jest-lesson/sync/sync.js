class Lodash {
  compact(arr) {
    return arr.filter(v => Boolean(v));
  }

  groupBy(array, prop) {
    return array.reduce((acc,elem) => {
      const key = typeof prop === 'function' ? prop(elem): elem[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(elem);
      return acc;
    }, {});
  }
}

module.exports = Lodash;