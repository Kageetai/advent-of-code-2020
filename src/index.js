const fetchInput = require("./fetchInput");
const days = require("./days");

const output = (i, r) => {
  console.log("day", i, r);
};

days.forEach((d, i) => {
  fetchInput(++i)
    .then(d)
    .then((r) => output(i, r));
});
