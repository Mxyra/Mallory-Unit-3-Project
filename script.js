/* Declare variables below to save the different sections (divs) of your story*/
let section1= document.querySelector(".story-opening");
let optionOnebutton = document.querySelector(".option-one"); 
let optionTwobutton = document.querySelector(".option-two"); 
let optionTwoscreen = document.querySelector(".option-two-screen");
let optionOnescreen = document.querySelector(".option-one-screen");
let optionOneend = document.querySelector(".option-one-end");
let optionTwoend = document.querySelector(".option-two-end");




optionOnebutton.onclick=function(){
optionOnescreen.style.display="block";
};

optionTwobutton.onclick=function(){
optionTwoscreen.style.display="block";
};
