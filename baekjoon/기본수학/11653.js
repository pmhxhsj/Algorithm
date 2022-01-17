const fs = require('fs');
let input = +fs.readFileSync('../input.txt').toString().trim();

if (input === 1) console.log('');

while (input % 2 === 0) {
  console.log(2);
  input /= 2;
}

for (let i = 3; i < input; i += 2) {
  while (input % i === 0) {
    console.log(i);
    input /= i;
  }
}

if (input > 2) {
  console.log(input);
}
