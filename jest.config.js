module.exports = {
  transform: {
    "^.+\\.js?$": `<rootDir>/jest-preprocess.js`,
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(js?)$",

  moduleFileExtensions: ["js", "json", "node"],
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
}
