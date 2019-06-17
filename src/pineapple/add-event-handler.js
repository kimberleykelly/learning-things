import RandomOne from "../../assets/sounds/random-one.wav";
import RandomTwo from "../../assets/sounds/random-two.wav";
import RandomThree from "../../assets/sounds/random-three.wav";
import RandomFour from "../../assets/sounds/random-four.wav";
import RandomFive from "../../assets/sounds/random-five.wav";
import RandomSix from "../../assets/sounds/random-six.wav";

function addEventHandler(button) {
  let sounds = [
    RandomOne,
    RandomTwo,
    RandomThree,
    RandomFour,
    RandomFive,
    RandomSix
  ];
  let pineappleRotation = 50;
  let soundIndex = 0;

  button.onclick = function() {
    button.style = `transform: rotate(${pineappleRotation}deg)`;
    pineappleRotation += 50;
    new Audio(sounds[soundIndex]).play();
    if (soundIndex == 5) {
      soundIndex = 0;
    } else {
      soundIndex++;
    }
  };
}

export { addEventHandler };
