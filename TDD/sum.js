function flat(arr) {
  return arr.reduce((prev, elem) => {
    elem.length ? prev = [...prev, ...flat(elem)] : prev.push(elem);
    return prev;
  }, []);
}

const arrr = [1, 2, [3, 4, [5, 6]], 7, [8]];
console.log(flat(arrr));