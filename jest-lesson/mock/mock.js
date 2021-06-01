function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  console.table(console);

  return result;
}


map([], elem => console.log(elem) );

//module.exports = { map };