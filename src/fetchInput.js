const fetch = require("node-fetch");

require("dotenv").config();

const fetchInput = (day) =>
  fetch(`https://adventofcode.com/2020/day/${day}/input`, {
    headers: {
      cookie:
        `session=${process.env.sessionCookie}`,
    },
    method: "GET",
  }).then((r) => r.text());

module.exports = fetchInput;
