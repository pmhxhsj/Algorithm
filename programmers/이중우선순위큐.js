function solution(operations) {
  let queue = [];

  operations.filter((a) => {
    if (a[0] === 'I') queue.push(parseInt(a.slice(2, a.length)));
    else if (a === 'D 1' && queue.length > 0) {
      let max = Math.max(...queue);
      queue.splice(queue.indexOf(max), 1);
    } else if (a === 'D -1' && queue.length > 0) {
      let min = Math.min(...queue);
      queue.splice(queue.indexOf(min), 1);
    }
  });

  return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}
