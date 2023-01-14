//your code here
function updatescreen(v) {
  let res = document.getElementById("screen").value += v;
  // if(res.length > 2) {
  //   result();
  // }
  result(res);
}

function result(val) {
  let v = val.at(-1);
  if(let str = v.match(/\W/g) == null){
	  let ind = val.indexOf(str);
	  val = val.slice(0, ind);
  }
    document.getElementById("preCalc").value = eval(val);
}
function ans() {
	document.getElementById("screen").value = eval(document.getElementById("screen").value);
}
function reset() {
  document.getElementById("screen").value = '';
}
function back() {
	let prev = document.getElementById("screen").value;
	let newVal = document.getElementById("screen").value = prev.slice(0, prev.length-1);
	result(newVal);
}