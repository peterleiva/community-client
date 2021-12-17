const path = require("path");
const nextJest = require("next/jest");

const factory = nextJest({
  dir: path.resolve(__dirname),
});

const custom = {
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};

module.exports = factory(custom);
