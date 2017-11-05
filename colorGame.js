var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  // reset button message
  resetButton.textContent = "New Colors"
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
  };
  h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?"
      //change everything to correct color
      changeColors(pickedColor);
    } else {
      this.style.background = "black";
      messageDisplay.textContent = "Try again";
    };
  });
};

function changeColors(color) {
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  };
}

function pickColor() {
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++) {
    //get random colors and push into arr
    arr.push(randomColor());
  };
  return arr
}

function randomColor() {
  //pick R between 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick G between 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick B between 0 to 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

