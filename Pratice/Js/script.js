//scoping
function a(){
    if(true){
    var a=5;
    console.log(a);
}
console.log(a);
}
a();

function b(){
    if(true){
        const b=10;
        console.log(b);
    }
    console.log(b);
}
b();

function c(){
    if(true){
        let c=20;
        console.log(c);
    }

    console.log(c);
}
c();

//arrow function
let abc = () => {
    if(true){
        var a=5;
        let b=10;
        const c=15;
        console.log(a, b, c);
    }

    console.log(a, b, c);
}
abc();

//this key word
// templet literals
var person ={
    name:'Arun',
    hi:function () {
        console.log(`Hi,my name is ${this.name}`);
    }
    
};
person.hi();

var p ={
    name:'Arun',
    hi:function () {
        const greet = () => {
        console.log(`Hi,my name is ${this.name}`);
    }
    greet();
}
}
p.hi();

const number =[1, 2, 3];
const sumES6 =(a,b,c) =>{
    return a+b+c;
}
console.log(sumES6(...number));