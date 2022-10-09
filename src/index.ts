function calcAverage(numArr: number[]): number | string {
  // write your code here
  try {
    if (numArr.length === 0) throw "Empty_Array";
    const result: number =
      numArr.reduce((acc, curEl) => acc + curEl, 0) / numArr.length;

    return result;
  } catch (err) {
    console.error("Error code:", err);
    return err as unknown as string;
  }
}

export { calcAverage };
