var color =[
	"rgb(255, 0, 0)",
	"rgb(22, 120, 0)",
	"rgb(177, 0, 120)",
	"rgb(210, 240, 0)",
	"rgb(150, 0, 0)",
	"rgb(90, 30, 0)"
];
var header=document.getElementById("header");

function gameOver(){

for (var i = 0; i <color.length; i++) {
	var newRan1 = Math.round(Math.random()*255);
	var newRan2 = Math.round(Math.random()*255);
	var newRan3 = Math.round(Math.random()*255);
	var colorString="rgb("+newRan1+", "+newRan2+", "+newRan3+")";
	color[i]=colorString;
}

var square = document.getElementsByClassName("square");
var i;

for(i=0;i<color.length;i++){
	square[i].style.backgroundColor=color[i];
}

var correctColor=Math.round(Math.random()*5);
var colorName=document.getElementById("colorName");

colorName.innerHTML=color[correctColor];
console.log("correct ----->"+correctColor);



var e = document.getElementById("container");
e.onclick = function(event) {
  	let target = event.target; // where was the click?
  	if(target.style.backgroundColor!=color[correctColor]){
  	target.style.backgroundColor="black";
  	}
  	if(target.style.backgroundColor==color[correctColor]){
  		for (var i = 0; i < square.length; i++) {
  			square[i].style.backgroundColor=color[correctColor];
  		}
  		header.style.backgroundColor=color[correctColor];
  	}
};

}
gameOver();

var newGame=document.getElementById("btn");
newGame.addEventListener("click",function(){
	gameOver();
	header.style.backgroundColor="steelblue";
});