//first dice image

var randomNumber=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

//second dice image

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


//who wins
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 win!  🚩";
}else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 win!  🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}