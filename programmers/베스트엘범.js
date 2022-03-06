function solution(genres, plays) {
  let arr = [];
  let genre = [];
  for (let i = 0; i < genres.length; i++) {
    if (!genre.includes(genres[i])) genre.push(genres[i]);
    arr.push({ gen: genres[i], play: plays[i] });
  }
  let sum = 0;
  let arr2 = [];
  for (let i = 0; i < genre.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].gen === genre[i]) {
        sum += arr[j].play;
      }
    }
    arr2.push({ gen: genre[i], play: sum });
    sum = 0;
  }

  arr.sort((a, b) => b.play - a.play);
  arr2.sort((a, b) => b.play - a.play);

  let arr3 = [];
  let answer = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].gen === arr2[i].gen) {
        arr3.push(arr[j]);
      }
      if (arr3.length === 2) {
        answer.push(...arr3);
        arr3 = [];
        break;
      }
    }
    if (arr3.length === 1) {
      answer.push(...arr3);
    }
    arr3 = [];
  }
  let ans = [];
  for (let i = 0; i < answer.length; i++) {
    let value = plays.indexOf(answer[i].play);
    ans.push(value);
    plays[value] = 0;
  }

  return ans;
}
