
var images= [ "dice1.png" , "dice2.png", "dice3.png" , "dice4.png", "dice5.png" , "dice6.png"]
  

    var getRandomImage1= Math.floor( Math.random() * images.length) ;

document.querySelector(".img1").setAttribute("src", "./images/" + images[getRandomImage1] );

    var getRandomImage2= Math.floor(Math.random() * images.length) ;
    
  document.querySelector(".img2").setAttribute("src", "./images/" + images[getRandomImage2]);

  //TO DECLARE WINNER

  if(getRandomImage1 > getRandomImage2){
      document.querySelector("h1").innerHTML = "🚩 Player 1 wins!!!";
  } else if (getRandomImage2 > getRandomImage1){
      document.querySelector("h1").innerHTML ="Player 2 wins!!! 🚩";
  } else {
      document.querySelector("h1").innerHTML = "Draw!!!";
  }
 