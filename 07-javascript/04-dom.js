// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

let copyButton = document.getElementById("copy");
copyButton.addEventListener("click", copyInput);

// callback function to handle event
function copyInput(e) {
  let input = document.getElementById("userInput1");
  let output = document.querySelector(".output");

  console.log("click event", e);
  output.textContent = input.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input2 = document.getElementById("userInput1");

// add an event listener on the target element
userInput2.addEventListener("input", updateWithInput);

let newElement = document.createElement("div");
newElement.setAttribute("id", "output2");
newElement.setAttribute("class", "output");
document.getElementById("inputEventExample").append(newElement);
document.querySelector("#inputEventExample").append(newElement);

// callback function to handle event

function updateWithInput(e) {
  console.log("input event", e);
  newElement.textContent = userInput2.value;
}
