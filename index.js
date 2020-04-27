//Create variables randomNumber1 and randomNumber2 and set them equal to a number between 1 and 6 (1 and 6 inclusive)
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

//Change image on left to a random dice between dice1.png and dice6.png
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");

//Change image on right to a random dice between dice1.png and dice6.png
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");


//Change title to name of winner or draw
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}

else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
