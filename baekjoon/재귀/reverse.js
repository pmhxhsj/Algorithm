function reverse(str) {
  const strToArr = str.split('');
  const reverseStr = [];
  function reverseToo(arr) {
    if (arr.length === 0) return 1;
    reverseStr.push(arr.pop());
    return reverseToo(arr);
  }
  reverseToo(strToArr);

  return reverseStr.join('');
}
