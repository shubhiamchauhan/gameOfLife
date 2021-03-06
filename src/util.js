const boardGenerator = function(size) {
  let board = new Array(size).fill([]);
  return board.map(element => new Array(size).fill("dead"));
}

const createAliveCells = function(cells, position) {
  cells[position[0]][position[1]] = "alive";
  return cells;
}

const isRealNeighbour = function(size) {
  return function(index) {
    return !(index < 0 || index >= size);
  }
}

const filterNeighbours = function(size) {
  return function(position) {
    return position.every(isRealNeighbour(size));
  }
}

exports.boardGenerator = boardGenerator;
exports.createAliveCells = createAliveCells;
exports.isRealNeighbour = isRealNeighbour;
exports.filterNeighbours = filterNeighbours;
