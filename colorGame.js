var numSquares = 9;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
    
            if(this.textContent === "Easy"){
                numSquares = 3;
            }else if(this.textContent === "Medium"){
                numSquares = 6;
            }else{
                numSquares = 9;
            }
            reset();
        })
    };
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    };
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
   reset();
})

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color
    }
}

function pickColor(){
    //pick random number that represents a color in the colors array
    var random = Math.floor(Math.random() * colors.length);
    //access color and return it
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    //return rgb color
    return "rgb(" + r + ", " + g + ", " + b + ")"; //returns "rgb(r, g, b)"
}