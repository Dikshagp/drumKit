//find no of buttons
var numberOfDrumButton = document.querySelectorAll(".drum").length;
console.log(numberOfDrumButton);
for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";

    var drumInnerhtml = this.innerHTML;
    console.log(drumInnerhtml);
    makeSound(drumInnerhtml);

    buttonAnimation(drumInnerhtml);

  });
}
//keyevent
document.addEventListener("keydown", function (event) {
 // alert("The key is pressed");
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);



});

//to make sound
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();

      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();

      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();

      break;
    case "k":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();

      break;
    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();

      break;

    default:
      console.log(drumChar);
  }
}


//add animation

function buttonAnimation(currentkey)
{
var activeButton = document.querySelector("." +currentkey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed")
}, 100);
}