// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  const strToArr = str.split('');

  function palindromeStr(arr) {
    if (arr.length <= 1) return true;
    const first = arr.shift();
    const second = arr.pop();

    if (first !== second) return false;
    return palindromeStr(arr);
  }

  return palindromeStr(strToArr);
}
