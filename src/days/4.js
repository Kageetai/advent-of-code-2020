const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

module.exports = (input) => {
  const formattedInput = input
    .join("\n")
    .match(/(.+)((\r?\n.+)*)/g)
    .map((i) => i.replace("\n", " "));

  return formattedInput.filter((i) => fields.every((f) => i.includes(f))).length;
};
