const fields = [
  /byr:(19[2-8][0-9]|199[0-9]|200[0-2])/,
  /iyr:(201[0-9]|2020)/,
  /eyr:(20[12][0-9]|2030)/,
  /hgt:(1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in/,
  /hcl:#[0-9a-f]{6}/,
  /ecl:(amb|blu|brn|gry|grn|hzl|oth)/,
  /pid:\d{9}/,
];

module.exports = (input) => {
  const formattedInput = input
    .join("\n")
    .match(/(.+)((\r?\n.+)*)/g)
    .map((i) => i.replace("\n", " "));

  return (
    formattedInput.filter((i) => fields.every((f) => i.match(f))).length - 1
  );
};
