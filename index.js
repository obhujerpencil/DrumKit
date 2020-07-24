

// ---------------------HTML button selecting code-------------------------

var number=document.querySelectorAll(".drum").length;
for(var i=0; i<number; i=i+1){




document.querySelectorAll(".drum")[i].addEventListener("click",x);
// document.querySelectorAll(".drum")[i].addEventListener("click",z);
function x(){
// function x(){
// console.log(this);}}It's output is all the buttons.
// document.querySelectorAll(".drum")[i].addEventListener("click",y);
//
// function y(){
//   this.style.color="green";on clicking the button the colour of the innerHTML turns green.
//   this.innerHTML="xyz";on clicking the button the innerHTML changes to xyz.
// }
var buttonClass=this.className;
if (buttonClass==="l drum"){
  var crash=new Audio('crash.mp3');
  crash.play();}
if (buttonClass==="w drum"){
var tom1=new Audio('tom-1.mp3');
tom1.play();}

if (buttonClass==="a drum"){
var tom2=new Audio('tom-2.mp3');
tom2.play();}

if (buttonClass==="s drum"){
var tom3=new Audio('tom-3.mp3');
tom3.play();}

if (buttonClass==="d drum"){
var tom4=new Audio('tom-4.mp3');
tom4.play();}

if (buttonClass==="j drum"){
var snare=new Audio('snare.mp3');
snare.play();}

if (buttonClass==="k drum"){
var kickbass=new Audio('kick-bass.mp3');
kickbass.play();}
}

}


// ---------------------------Keyboard button selecting code------------------------------------


 document.addEventListener('keydown',y)
 function y(e){
   if (e.key==="l"){
     var crash=new Audio('crash.mp3');
     crash.play();}

   if (e.key==="w"){
   var tom1=new Audio('tom-1.mp3');
   tom1.play();}

   if (e.key==="a"){
   var tom2=new Audio('tom-2.mp3');
   tom2.play();}

   if (e.key==="s"){
   var tom3=new Audio('tom-3.mp3');
   tom3.play();}

   if (e.key==="d"){
   var tom4=new Audio('tom-4.mp3');
   tom4.play();}

   if (e.key==="j"){
   var snare=new Audio('snare.mp3');
   snare.play();}

   if (e.key==="k"){
   var kickbass=new Audio('kick-bass.mp3');
   kickbass.play();}}


   // ------------------Adding animation to HTML button-----------------------

// MAIN IDEA

  document.querySelectorAll(".drum")[0].addEventListener("click",z);
  function z(){document.querySelectorAll(".drum")[0].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[0].classList.remove("pressed");},500)}}

  document.querySelectorAll(".drum")[1].addEventListener("click",a);
  function a(){document.querySelectorAll(".drum")[1].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[1].classList.remove("pressed");},300)}}

  document.querySelectorAll(".drum")[2].addEventListener("click",b);
  function b(){document.querySelectorAll(".drum")[2].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[2].classList.remove("pressed");},300)}}

  document.querySelectorAll(".drum")[3].addEventListener("click",c);
  function c(){document.querySelectorAll(".drum")[3].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[3].classList.remove("pressed");},300)}}

  document.querySelectorAll(".drum")[4].addEventListener("click",d);
  function d(){document.querySelectorAll(".drum")[4].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[4].classList.remove("pressed");},300)}}

  document.querySelectorAll(".drum")[5].addEventListener("click",e);
  function e(){document.querySelectorAll(".drum")[5].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[5].classList.remove("pressed");},300)}}

  document.querySelectorAll(".drum")[6].addEventListener("click",f);
  function f(){document.querySelectorAll(".drum")[6].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[6].classList.remove("pressed");},300)}}



// ------------------------Adding animation to keyboard button-------------------------------------


document.addEventListener("keydown",p)
function p(e){
  if (e.key==="l"){document.querySelectorAll(".drum")[6].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[6].classList.remove("pressed");},600)}
}


  if (e.key==="k"){document.querySelectorAll(".drum")[5].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[5].classList.remove("pressed");},600)}}




  if (e.key==="j"){document.querySelectorAll(".drum")[4].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[4].classList.remove("pressed");},600)}}




  if (e.key==="d"){document.querySelectorAll(".drum")[3].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[3].classList.remove("pressed");},600)}}




  if (e.key==="s"){document.querySelectorAll(".drum")[2].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[2].classList.remove("pressed");},600)}}




  if (e.key==="a"){document.querySelectorAll(".drum")[1].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[1].classList.remove("pressed");},600)}}




  if (e.key==="w"){document.querySelectorAll(".drum")[0].classList.add("pressed");
  {setTimeout(function(){document.querySelectorAll(".drum")[0].classList.remove("pressed");},600)}}}
