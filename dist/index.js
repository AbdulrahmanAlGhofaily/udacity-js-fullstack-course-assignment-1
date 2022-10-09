function calcAverage(numArr) {
    // write your code here
    try {
        if (numArr.length === 0)
            throw "Empty_Array";
        var result = numArr.reduce(function (acc, curEl) { return acc + curEl; }, 0) / numArr.length;
        return result;
    }
    catch (err) {
        console.error("Error code:", err);
        return err;
    }
}
export { calcAverage };
