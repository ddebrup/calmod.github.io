let str = "";
let prev="";
const calculate = (val) => {
  if (val === "=") {
    if(["+", "-", "/", "*", "."].includes(prev)){
            str=str.substring(0,str.length-1);
            prev="";
          }
    let result = eval(str);
    str = "" + result;
  } else if (val === "CLR") {
    str = "";
  } else if (val === "BACKSPACE") {
    str=str.substring(0,str.length-1);
  } 
  else {
    if(["+", "-", "/", "*", "."].includes(prev) && ["+", "-", "/", "*", "."].includes(val)){
        str += "";
        }
     else{   
       str += val;
      }
    prev=val;
  }
  let elem = document.getElementById("displayText");
  elem.innerText = str;
};


