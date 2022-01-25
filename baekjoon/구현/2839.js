const fs = require('fs');
let input = +fs.readFileSync('../input.txt').toString().trim();

let count = 0;

while (true) {
  if (input < 0) {
    console.log(-1);
    break;
  }
  if (input % 5 === 0) {
    console.log(count + input / 5);
    break;
  }

  input -= 3;
  count++;
}
