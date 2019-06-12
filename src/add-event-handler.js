function addEventHandler(button) {
  let pineappleRotation = 50;
  button.onclick = function() {
    button.style = `transform: rotate(${pineappleRotation}deg)`;
    pineappleRotation += 50;
  };
}

export { addEventHandler };
