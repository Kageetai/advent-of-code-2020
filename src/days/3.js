const TREE = '#';

module.exports = (input) => {
  let x = 0;
  let treesEncountered = 0;

  for (let i = 0; i < input.length; i++) {
    let pos = input[i][x];

    if (pos === TREE) {
      treesEncountered++;
    }

    x += 3;
    if (x >= input[i].length) {
      x -= input[i].length;
    }
  }

  return treesEncountered;
};
