function validateBattlefield(field) {
  const existedShips = Array(field.length).fill(0).map(() => Array(field[0].length).fill(0));
  const ships = { 1: [], 2: [], 3: [], 4:[] };

  let isValid = true;
  let currentShip = [];
  let direction = null;

  function buildShip(x, y, buildDirection) {
    currentShip.push({x, y});
    existedShips[y][x] = 1;
    const check = checkNear(x, y, buildDirection);
    if (check === 'incorrect') {
      return isValid = false;
    }
    if (buildDirection === 'right' && buildDirection === check) {
      return buildShip(x + 1, y, buildDirection);
    }
    if (buildDirection === 'bottom' && buildDirection === check) {
      return buildShip(x, y + 1, buildDirection);
    }
    if (check === 'end') {
      ships[currentShip.length].push(currentShip);
      currentShip = [];
      return 'end';
    }
  }

  function checkNear(x, y, direction) {
    if (x + 1 < field[y].length && y + 1 < field[y].length && field[y + 1][x + 1] === 1 ) {
      return 'incorrect';
    }
    if (x - 1 > 0 && y + 1 < field[y].length && field[y + 1][x - 1] === 1) {
      return 'incorrect';
    }
    if (x + 1 < field[y].length && field[y][x + 1] === 1) {
      return direction === 'bottom' ? 'incorrect' : 'right'
    }
    if (y + 1 < field[y].length && field[y + 1][x] === 1 ) {
      return direction === 'right' ? 'incorrect' : 'bottom';
    }
    return 'end';
  }
  
  iter: for (let i = 0; i < field.length; i ++) {
    for (let j = 0; j < field.length; j++) {
      if (field[i][j] === 1 && !existedShips[i][j]) {
        existedShips[i][j] = 1;
        direction = checkNear(j, i, direction);
        if (direction === 'incorrect') {
          isValid = false;
          break iter;
        } else {
          direction = buildShip(j, i, direction);
        }
      }
    }
  }
  return (ships[1].length === 4 && ships[2].length === 3 && ships[3].length === 2 && ships[4].length === 1) && isValid;
}


const sum = a => b => a + b;
console.log(sum(1)(2));

// true
// false
// false
// false
// false
// false
// false
// console.log(validateBattlefield([
//   [1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
//   [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]]));

// console.log(validateBattlefield([
//   [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
//   [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]));

// console.log(validateBattlefield([
//   [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
//   [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]]));

// console.log(validateBattlefield([
//   [ 0, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]]));

// console.log(validateBattlefield([
//   [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
//   [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 0, 1, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]]));

// console.log(validateBattlefield([
//   [ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 1, 1, 0, 0, 1, 1, 1, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 1, 0, 1, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]]));

// console.log(validateBattlefield([
//   [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]));
  

