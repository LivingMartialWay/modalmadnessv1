import React from "react";
import "./shader.css";

export default class Shader extends React.Component {

  render() {

    return (
      <div class="shader">{this.props.children}</div>
    );
  }
}
