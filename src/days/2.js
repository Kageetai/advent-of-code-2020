const regex = /(\d+)-(\d+)\s(\w):\s(\w+)/;

module.exports = (input) =>
  input
    .filter((i) => !!i)
    .filter((i) => {
      const [, a, b, char, password] = i.match(regex);
      const charA = password[parseInt(a) - 1];
      const charB = password[parseInt(b) - 1];

      return (charA === char || charB === char) && charA !== charB;
    }).length;
