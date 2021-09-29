import React from "react";
import "./exit.css";

export default class Exit extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {

    return (
      <div class="exitbutton"
        onClick={this.onClose}>
        {this.props.children}
      </div>
    );
  }
}
