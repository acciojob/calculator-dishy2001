//your code here
function updatescreen(v) {
  console.log(typeof v);
  let res = document.getElementById("screen").value += v;
  if(res.length > 2) {
    result();
  }
}

function result() {
  let v = document.getElementById("screen").value.at(-1);
  if(v.match(/\W/g) == null){
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
  }
}

function reset() {
  document.getElementById("screen").value = '';
}