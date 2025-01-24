// for player 1
let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "./images/" + randomImage;
let image1 = document.querySelector(".img1");
image1.setAttribute("src",randomImageSource);

// for player 2
let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "./images/" + randomImage2;
let image2 = document.querySelector(".img2");
image2.setAttribute("src",randomImageSource2);

// conditon for winning
let h1 = document.querySelector("h1");
if (randomNumber1>randomNumber2){
  h1.innerHTML="Player 1 wins"
}else if (randomNumber1 < randomNumber2){
  h1.innerHTML = "Player 2 Wins"
}else{
  h1.innerHTML ="Its a TIE"
}

