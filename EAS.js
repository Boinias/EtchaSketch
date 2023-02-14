//Reset
/*
function reset () {
  var squares = document.getElementsByClassName('square');

  for (var i = 0; i < squares.length; i++) {
    var element = squares[i];
    element.style.background = 'white';
  }
}

document.getElementById('reset').addEventListener('click', reset);*/


//Choose your res

var resPrompt;
function resolution () {
  var aPrompt = (prompt("Choose your res"));
  resPrompt = Number(aPrompt)
}

//I've made 4 squares manually for now. I've inputted the width and successfully assigned each square to the class "square"

/*
var makeSquare = document.createDocumentFragment();
for(var i=0; i < (resPrompt*resPrompt); i++){
   var newSquare = document.createElement('div');
   newSquare.className = 'square';
   square.style.width = `${500/resprompt}px`;
   square.setAttribute("class", "square");
   makeSquare.appendChild(newSquare);
}*/

function play () {
    const canvas = document.getElementById('canvas');
        for (let i = 0; i <= (resPrompt*resPrompt); i++) {
            let makeSquare = document.createElement('div');
          makeSquare.style.width = `${500/resPrompt}px`;
          makeSquare.style.height = `${500/resPrompt}px`;
          makeSquare.setAttribute("class", "square");
        document.getElementById('canvas').appendChild(makeSquare);
        }
  
  const allSquares = document.querySelectorAll('.square')
allSquares.forEach(function(e){
  e.addEventListener('mouseover', function (e) {
     e.target.style.background = "black";
  });
});
}

/*
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
*/

// Mouseover

