import React from "react";
import PropTypes from "prop-types";
import FluxContext from "./flux-context";

class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: props.rotationStart,
      soundIndex: 0
    };
  }

  handleClick() {
    const { rotationStep, onClick } = this.props;
    this.playSound();
    this.setState({ rotation: this.state.rotation + rotationStep });
    onClick();
  }

  playSound() {
    const { soundIndex } = this.state;
    const { sounds } = this.props;
    sounds ? new Audio(sounds[soundIndex]).play() : null;

    if (soundIndex === 5) {
      this.setState({ soundIndex: 0 });
    } else {
      this.setState({ soundIndex: soundIndex + 1 });
    }
  }

  render() {
    const { text, className, rotationType } = this.props;
    const stylingProperty = rotationType === "rotate" ? "transform" : "filter";

    window.setTimeout(() => {
      this.context.commandHandler.run("userStore.increase");
    }, 5000);
    return (
      <div>
        <button
          onClick={() => this.handleClick()}
          style={{
            [stylingProperty]: `${rotationType}(${this.state.rotation}deg)`
          }}
          className={className}
        />
        <h1>{text}</h1>
      </div>
    );
  }
}

Fruit.propTypes = {
  rotationType: PropTypes.oneOf(["hue-rotate", "rotate"]).isRequired,
  rotationStart: PropTypes.number.isRequired,
  rotationStep: PropTypes.number.isRequired,
  sounds: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string,
  className: PropTypes.string.isRequired
};

Fruit.contextType = FluxContext;

export default Fruit;
