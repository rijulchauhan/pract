/*var o={
    n:9,
    handleClick(){
        console.log(this.n);
    console.log("Clicked");
    let a=()=>{
        console.log(this.n);
        console.log("arrow fxn");
    }; 
    a();
    },
    b:()=>{
        console.log(this.n);
    }

}
o.handleClick();
o.b();
//--------------------------------------------------------------------------------------------------
function ab(y){
    let a=10;
    return y;
}
let c=ab(function b(){
    console.log(a);
});
c();

let a=["Rijul","Chauhan"];
console.log(a.sort());

var moment=require('moment');
var a=10;
async function abc(){
    let n=await new Promise((resolve,reject)=>{
        if (a==10){
            resolve(a);
        }else{
            reject(a);
        }
    }).then((b)=>(b));
    console.log(n);
}
abc();
console.log(moment('20211009','YYYYMMDD').format('YYYY/MM/DD'));

function b(){
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function a(){
    var xml=new XMLHttpRequest();
    xml.open("GET","https://www.google.com");
    xml.onload=function(){
        console.log(xml.responseText);
    }
    xml.send();
}
    return a;
}
let c=b();
setTimeout(c,1000);
*/
var a={
    ab:["a","b"]
}
var b={
    ab:["a","b"]
}
JSON.stringify(a).each(function(i){
    console.log(i);
});
if(JSON.stringify(a)===JSON.stringify(b)){
    console.log("equal");
}else{
    console.log("not equal")
}
if(a===b){
    console.log("equal");
}else{
    console.log("not equal")
}
console.log("JSON : ",JSON.stringify(a));
console.log("Object : ",a);
console.log("Rijul");