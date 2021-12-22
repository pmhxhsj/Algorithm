function solution(record) { 
  let answer = []; 
  const map = new Map(); 
  
  for (let i = 0; i < record.length; ++i) {
      const [state, id, name] = record[i].split(' '); 
      if (state === 'Leave') { 
          answer.push([id, '님이 나갔습니다.']); 
          continue; 
      } 
      else if (state === 'Enter') { 
          answer.push([id, '님이 들어왔습니다.']); 
      } 
      
      map.set(id, name);
  } 
  // console.log([...map.entries()]);
  return answer.map(ele => map.get(ele[0]) + ele[1]); 
}