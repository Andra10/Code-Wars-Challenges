function solution(string) {
  let finalString = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] == string[i].toUpperCase()){
      finalString += ' ';
    }
    finalString += string[i];
  }
  return finalString;
}