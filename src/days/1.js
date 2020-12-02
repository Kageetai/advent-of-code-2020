module.exports = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const a = parseInt(input[i]);
      const b = parseInt(input[j]);
      if (a + b === 2020) {
        return a * b;
      }
    }
  }
};
