import { calcAverage } from "../index.js";

describe("Test expected values from calcAverage() function", () => {
  it("check if the result of calcAverage([1,1,1,1]) is equal to 1", () => {
    expect(calcAverage([1, 1, 1, 1])).toEqual(1);
  });

  it("check if the result of calcAverage([10,2,5,2,7]) is equal to 5.2", () => {
    expect(calcAverage([10, 2, 5, 2, 7])).toEqual(5.2);
  });

  it("check if the result of calcAverage([-10, 2]) is equal to -4", () => {
    expect(calcAverage([-10, 2])).toEqual(-4);
  });

  it('check if the array is empty, expect error code to equal "Empty_Array"', () => {
    expect(calcAverage([])).toEqual("Empty_Array");
  });
});
