const n = 4;
const q = [5, 11, 24];
const input = ['I 2 3', 'I 1 3', 'F 2', 'I 2 2', 'F 2', 'I 3 5', 'I 3 4', 'F 4', 'F 2', 'I 4 20', 'F 4'];

function solution(n, q, input) {
  const query = input.map((v) => v.split(' '));
  const object = {};
  const idx = 1;
  console.log(query);
  for (let i = 1; i <= n; i++) {
    object[i] = {};
  }
  query.forEach((v) => {
    if (v[0] === 'I') {
      object[idx][[v[1]]] = +v[2];

      for (let k = 1; k <= q.length; k++) {
        value = Object.values(object[k]);

        if (value.length !== 0 && value.reduce((acc, cur) => acc + cur) > q[k - 1]) {
          const keys = Object.keys(object[k]);
          for (let i = 0; i < keys.length; i++) {
            object[k + 1][keys[i]] = object[k][keys[i]];
          }
          object[k] = {};
        }
      }
    } else if (v[0] === 'F') {
      const value = Object.values(object);

      console.log(validation(value, v[1]).join(' '));
    }
  });

  return;
}

function validation(value, num) {
  for (let i = 0; i < value.length; i++) {
    if (value[i][num]) {
      return [i + 1, value[i][num]];
    }
  }
  return ['none'];
}

console.log(solution(n, q, input));
