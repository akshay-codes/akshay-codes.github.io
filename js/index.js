/*
Project Name: Chameleon Footer
Created On : 09-01-2019
tested on: Safari(Mac),chrome(Mac)
Script: vanilla javascript
total time: 1 hour 
You Can Find Me On Instagram: @akshaycodes 
if you have questions feel free to ask
*/
console.clear();

document.addEventListener("DOMContentLoaded", function(event) {check()});
console.clear();
var dl = document.getElementById("Chameleon").children
var footer = document.getElementById("target")
var d2=  document.getElementById("Chameleon").children.length

function check (){
  for (i = 0; i < d2; i++)
{

   if (dl[i].getBoundingClientRect().top <= footer.getBoundingClientRect().top ){
     
  footer.style.backgroundColor =window.getComputedStyle(dl[i], null).getPropertyValue("background-color");   
}
}

}

window.addEventListener('scroll', function(ev) {
  check();
});