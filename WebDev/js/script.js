var colors = [
  "#C94C24", //orange
  "#26bbd2", //blue
  "#c4226F", //pink
  "#859835", //lime
  "#6d73c2", //purple
];

function makeBoxes(howMany) {
  var colorAmt = colors.length;
  var currColor = 0;
  var myElement;
  var myNode = document.querySelector(".boxes");

  for (let i = 0; i < howMany; i++) {
    myElement = document.createElement("div");
    myElement.className = "box";
    myElement.style = "background-color:" + colors[currColor];
    myNode.appendChild(myElement);

    if (currColor === colorAmt - 1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }

  myNode.addEventListener(
    "click",
    function (e) {
      //To remove an element, you have to target the parent of the element you want to remove
      e.target.parentNode.removeChild(e.target);
    },
    false
  );
}

makeBoxes(20);
