const regex = /(\d+)-(\d+)\s(\w):\s(\w+)/;
const stripOthers = (char) => new RegExp(String.raw`[^${char}]`);

module.exports = (input) =>
  input
    .filter((i) => !!i)
    .filter((i) => {
      const [match, from, to, char, password] = i.match(regex);
      const charCount = (password.match(new RegExp(char, "g"), "") || []).length;

      return charCount >= from && charCount <= to;
    }).length;
