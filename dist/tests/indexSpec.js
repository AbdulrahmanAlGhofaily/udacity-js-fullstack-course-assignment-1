import { calcAverage } from "../index.js";
describe("Test expected values from calcAverage() function", function () {
    it("check if the value of calcAverage([1,1,1,1]) is equal to 1", function () {
        expect(calcAverage([1, 1, 1, 1])).toEqual(1);
    });
    it("check if the value of calcAverage([10,2,5,2,7]) is equal to 5.2", function () {
        expect(calcAverage([10, 2, 5, 2, 7])).toEqual(5.2);
    });
    it("check if the value of calcAverage([-10, 2]) is equal to -4", function () {
        expect(calcAverage([-10, 2])).toEqual(-4);
    });
    it('check if the array is empty, expect error code to equal "Empty_Array"', function () {
        expect(calcAverage([])).toEqual("Empty_Array");
    });
});
