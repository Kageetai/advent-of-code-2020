const TREE = "#";
const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

module.exports = (input) =>
  slopes.reduce((acc, [deltaX, deltaY], index) => {
    let x = 0;
    let treesEncountered = 0;

    for (let i = 0; i < input.length; i += deltaY) {
      let pos = input[i][x];

      if (pos === TREE) {
        treesEncountered++;
      }

      x += deltaX;
      if (x >= input[i].length) {
        x -= input[i].length;
      }
    }

    return acc * treesEncountered;
  }, 1);
