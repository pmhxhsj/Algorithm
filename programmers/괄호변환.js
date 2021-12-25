function solution(p) {
  if(p === '') 
      return '';
  
  let count = 0;
  let bool = false;
  let txt = "";
  
  for(let i = 0; i < p.length; i++){
      
      if(p[i] == '(') count++;
      else count--;
      
      if(count < 0) bool = true;
      
      if(count === 0){
          
          let u = p.slice(0, i+1);
          let v = p.slice(i+1, p.length);
          
          if(bool){
              txt += '(';
              txt += solution(v);
              txt += ')';
          
              for (let j = 1; j < i; j++) {
        if (p[j] == ')') txt += '(';
        if (p[j] == '(') txt += ')';
      }
      return txt;
          }
          else{ 
              
              txt += u;
              txt += solution(v);
              return txt;
          }
      }   
  } 
}