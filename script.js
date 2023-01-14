function updatescreen(v) {
    let res;
    if(document.getElementById("screen").value == "0" && v.match(/\W/g) == null){
        res = document.getElementById("screen").value = v;
    }
    else{
        res = document.getElementById("screen").value += v;
    }
    // if(res.length > 2) {
    //   result();
    // }
    result(res);
  }
  
  function result(val) {
    let v = val.at(-1);
      let str;
      if(val == "" || (str = v.match(/\W/g)) != null){
        let ind = val.lastIndexOf(str);
        if(ind >= 0)
        val = val.slice(0, ind);
    }
      else{}
      document.getElementById("preCalc").value = eval(val);
  }
  function ans() {
      document.getElementById("screen").value = eval(document.getElementById("screen").value);
  }
  function reset() {
    document.getElementById("screen").value = '0';
  }
  function back() {
      let prev = document.getElementById("screen").value;
      
      let newVal = document.getElementById("screen").value = prev.slice(0, prev.length-1);
      if(newVal == "") {
        result("0");
        return;
      }
      result(newVal);
  }