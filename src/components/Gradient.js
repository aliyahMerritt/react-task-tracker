import React, { Component } from "react";
 
import GradientGenerator from "react-gradient-generator";
 
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { startColor: "#ff0000", endColor: "#ffffff", steps: 5 };
  }
 
  getGradients(gradients) {
    console.log(gradients); // ["rgb(255, 51, 51)", "rgb(255, 102, 102)", "rgb(255, 153, 153)", "rgb(255, 204, 204)", "rgb(255, 255, 255)"]
  }
  render() {
    return (
      <GradientGenerator
        startColor={this.state.startColor}
        endColor={this.state.endColor}
        steps={this.state.steps}
        getGradients={this.getGradients}
      />
    );
  }
}