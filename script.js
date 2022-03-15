let sub=document.getElementById('decrement');
let add=document.getElementById('increment');
let result=document.getElementById('number');
let integer=0;

sub.addEventListener('click', function(a){
    a.preventDefault();
    if (integer>0){
      integer-=1;  result.innerText=integer;
    return;
    }
    
});

add.addEventListener('click', function(b){
    b.preventDefault();
    integer +=1;
    result.innerHTML=integer;
    return;
});

let MyName=document.getElementById('name');
let MyEmail=document.getElementById('email');
let date=document.getElementById('day');
let time=document.getElementById('clock');
let counter=document.getElementById('number');
let output=document.getElementById('output');
let submit=document.querySelector('#submit');

console.log(output);
submit.addEventListener('click', validate)

function validate(e){
    e.preventDefault();
    if(MyName.value==""){
        output.innerText="**Username must be filled out!!!";
        return;
    }
    if(MyEmail.value==""){
        output.innerText="**Email must be filled out!!!";
        return;
    }
    if(date.value==""){
        output.innerText="**Date must be filled out!!!";
        return;
    } 
    if(time.value==""){
        output.innerText="**Time must be filled out!!!";
        return;
    } 
}
console.log(sub);