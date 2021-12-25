function solution(m, musicinfos) {
  m = m
  .replace(/(C#)/g,"c")
  .replace(/(D#)/g,"d")
  .replace(/(F#)/g,"f")
  .replace(/(G#)/g,"g")
  .replace(/(A#)/g,"a");

  let arr = [];
  for(let i = 0; i < musicinfos.length; i++)
      arr.push(musicinfos[i].split(","));

  for(let i = 0; i < arr.length; i++){
      arr[i][3] = arr[i][3]
          .replace(/(C#)/g,"c")
          .replace(/(D#)/g,"d")
          .replace(/(F#)/g,"f")
          .replace(/(G#)/g,"g")
          .replace(/(A#)/g,"a");
  }

  let result = [];
  let answer = [];
  for(let i = 0; i < arr.length; i++){
      let firstM = parseInt(arr[i][0].substring(3,5));
      let secondM = parseInt(arr[i][1].substring(3,5));
      let firstO = parseInt(arr[i][0].substring(0,2));
      let secondO = parseInt(arr[i][1].substring(0,2));
      let count = 0;

      if(secondO - firstO < 0) {
          count += 60 * (24 - firstO + secondO - 1);
          count += (60 - firstM) + secondM;
      }
      else if(secondO === firstO){
           count = secondM - firstM;
      }
      else{
          count += 60 * (secondO - firstO - 1);
          count += (60 - firstM) + secondM;
      }

      let value = Math.floor(count / arr[i][3].length);
      let Remainder = count - (value * arr[i][3].length);

      result.push({count : count, value : arr[i][3].repeat(value) + arr[i][3].substring(0,Remainder), ans : arr[i][2]});

      if(result[i].value.includes(m)){
          answer.push({count : result[i].count, answer : result[i].ans});
      }
  }
  answer.sort((a,b) => {
      return b.count - a.count;
  });

  return answer.length !== 0 ? answer[0].answer : "(None)";
}