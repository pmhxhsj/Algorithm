function solution(id_list, report, k) {
  report = [...new Set(report)].map((v) => v.split(' '));
  const reported = report.map((v) => v[1]);
  const reportCount = new Array(id_list.length).fill(0);
  const kReported = [];

  reported.forEach((v) => {
    reportCount[id_list.indexOf(v)]++;
  });

  reportCount.forEach((v, idx) => {
    if (v >= k) {
      kReported.push(id_list[idx]);
    }
  });

  const answer = new Array(id_list.length).fill(0);

  report.forEach((v, idx) => {
    if (kReported.includes(v[1])) {
      answer[id_list.indexOf(v[0])]++;
    }
  });

  return answer;
}
