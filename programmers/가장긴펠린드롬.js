function isPalindrome(arr) {
  if (arr.length <= 1) return true;
  const first = arr.shift();
  const second = arr.pop();

  if (first !== second) return false;
  return isPalindrome(arr);
}

function solution(s) {
  for (let i = s.length; i >= 0; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      if (isPalindrome(s.substring(j, j + i).split(''))) return i;
    }
  }

  return 1;
}
