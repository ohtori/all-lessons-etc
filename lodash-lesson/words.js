const lukomorie = require('./index');
const _ = require('lodash');
const { link } = require('./index');

const top5Words = _.flow([
  _.toLower,
  _.words,
  _.countBy,
  _.toPairs,
  _.partial(_.orderBy, _, 1, 'desc'),
  _.partial(_.take, _, 5),
  _.fromPairs
]);

console.log(top5Words(lukomorie));

