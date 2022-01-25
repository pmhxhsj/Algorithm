const fs = require('fs');
let [hour, minute] = fs.readFileSync('../input.txt').toString().trim().split(' ').map(Number);

let time = hour !== 0 ? hour * 60 + minute - 45 : 24 * 60 + minute - 45;
let alarmHour = time >= 1440 ? 0 : Math.floor(time / 60);
time %= 60;

console.log(alarmHour, time);
