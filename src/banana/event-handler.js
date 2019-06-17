function onClickEventHandler(bananaButton) {
  let colorChange = 90;
  bananaButton.addEventListener("click", function() {
    bananaButton.style = `filter:hue-rotate(${colorChange}deg)`;
    colorChange += 100;
  });
}

export { onClickEventHandler };
