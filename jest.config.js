module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./setup-jest.ts"],
  moduleNameMapper: {
    "@angular/core": "./node_modules/@angular/core",
  },
};
