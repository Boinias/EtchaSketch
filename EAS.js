//I've made 4 squares manually for now. I've inputted the width and successfully assigned each square to the class "square"

const square = document.createElement("div");
square.style.width = "250px";
square.setAttribute("class", "square");

const square1 = document.createElement("div");
square1.style.width = "250px";
square1.setAttribute("class", "square");

const square2 = document.createElement("div");
square2.style.width = "250px";
square2.setAttribute("class", "square");

const square3 = document.createElement("div");
square3.style.width = "250px";
square3.setAttribute("class", "square");


document.getElementById("canvas").appendChild(square);
document.getElementById("canvas").appendChild(square1);
document.getElementById("canvas").appendChild(square2);
document.getElementById("canvas").appendChild(square3);




// Below I've tried to make each square change colour upon mouseover but only "const = square" (the first square) does so. Please help!


const allSquares = document.querySelectorAll('.square')
allSquares.forEach(function(e){
  e.addEventListener('mouseover', function (e) {
     e.target.style.background = "black";
      //need to make this a toggle thing not just a change colour thing
  });
});