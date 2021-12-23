const path = require("path");
const nextJest = require("next/jest");

const factory = nextJest({
  dir: path.resolve(__dirname),
});

const custom = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: [
    "node_modules",
    path.resolve(__dirname),
    path.resolve(__dirname, "src"),
  ],

  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};

module.exports = factory(custom);
