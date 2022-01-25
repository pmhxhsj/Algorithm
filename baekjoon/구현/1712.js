const fs = require('fs');
const [expenditure, cost, price] = fs.readFileSync('../input.txt').toString().trim().split(' ').map(Number);

const answer = () => {
  const margin = price - cost;
  const answer = expenditure / margin;

  if (margin <= 0) {
    return console.log(-1);
  }

  if (answer === parseInt(answer)) {
    return console.log(answer + 1);
  } else {
    return console.log(Math.ceil(answer));
  }
};

answer();
