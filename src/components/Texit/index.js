import React from "react";
import "./texit.css";

export default class Texit extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {

    return (
      <div onClick={this.onClose} class="close-container">
        <div class="leftright"></div>
        <div class="rightleft"></div>
        <label class="close">close</label>
      </div>
    );
  }
}
