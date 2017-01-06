//selects h2 element and puts a message to the console when clicked
  var hTwo = document.getElementByTagName("h2");
  hTwo.addEventListener("click", function() {
    console.log("You clicked!");
  });

//depending on how many clicks, 1-3, a different message is logged into the console
  var button = document.getElementByTagName("button");
    button.addEventListener("mousedown", function(event) {
      if (event.which == 1) {
        console.log("one button press");
      }
      else if (event.which == 2) {
        console.log("two button press");
      }
      else if (event.which == 3) {
        console.log("three button press");
      }
      else {
        console.log("too many or not enough clicks!");
      }
    });

//pressing a keycode to create an event within a keypress
//keyboard - V
addEventListener("keydown", function(event) {
    if (event.keyCode == 86)
      document.body.style.background = "violet";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 86)
      document.body.style.background = "";
  });
// keyboard - L
  addEventListener("keydown", function(event){
    if (event.keyCode == 76) {
      document.body.style.background = "orange";
    }
    });
  addEventListener("keyup", function(event){
    if (event.keyCode == 76) {
      document.body.style.background = "";
    }
  });

// focus and blur on an input field

 var help = document.querySelector("#help");
  var fields = document.querySelectorAll("input");
  for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener("focus", function(event) {
      var text = event.target.getAttribute("data-help");
      help.textContent = text;
    });
    fields[i].addEventListener("blur", function(event) {
      help.textContent = "";
    });
  }

  //setTimeout method

    document.body.style.background = "blue";
  setTimeout(function() {
    document.body.style.background = "yellow";
  }, 2000);

  //version 2

  var button = document.getElementById("whichButton");
  button.style.background-color = "blue"
  setTimeout(function () {
    button.style.background = "red";}, 2000);

//clearTimeOut method

var bombTimer = setTimeout(function() {
  console.log("BOOM!");
}, 500);

if (Math.random() < 0.5) { // 50% chance
  console.log("Defused.");
  clearTimeout(bombTimer);
}
