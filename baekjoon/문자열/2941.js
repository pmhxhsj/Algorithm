const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim();

input = input
  .replace(/dz=/gi, '.')
  .replace(/nj/gi, '.')
  .replace(/c=/gi, '.')
  .replace(/c-/gi, '.')
  .replace(/d-/gi, '.')
  .replace(/lj/gi, '.')
  .replace(/s=/gi, '.')
  .replace(/z=/gi, '.');

console.log(input.length);
