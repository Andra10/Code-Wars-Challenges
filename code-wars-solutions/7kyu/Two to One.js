function longest(s1, s2) {
    let a = [... new Set(s1.split(""))];
      let b = [... new Set(s2.split(""))];
    
      //combine the arrays into one
      for (let i=0; i<b.length; i++){
        a.push(b[i]);
      }
      //combine the 2 arrays
      let init_combo = [... new Set(a)];
      //sort array and transform it into a string 
      let combo = init_combo.sort().join("");
      //Return 
      return combo;
    
    }