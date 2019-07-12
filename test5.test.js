const assert = require("assert");

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;

describe("test5", () => {
  describe("sum", () => {
    it("should return 5 when is called with 2 and 3", () => {
      // ARRANGE
      const a = 2;
      const b = 3;

      // ACT
      const result = sum(a, b);
      const expected = 5;

      // ASSERT
      assert.equal(result, expected);
    });
  });

  describe("mult", () => {
    it("should return 8 when is called with 2 and 4", () => {
      // ARRANGE
      const a = 2;
      const b = 4;

      // ACT
      const result = mult(a, b);
      const expected = 8;

      // ASSERT
      assert.equal(result, expected);
    });
  });
});
