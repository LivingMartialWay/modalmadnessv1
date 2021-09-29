import React from "react";
import "./modal.css";
import Title from "../Title"
import Exit from "../Exit";
import Content from "../Content"
import Button from "../Button";
import Shader from "../Shader";

export default class Modal extends React.Component {
  state = { useDim: false };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  acceptTC = e => {
    this.props.acceptTC && this.props.acceptTC(e);
  };



  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="shaderlayer">
        <div class="modal" id="modal">
          <div class="title">
            <Exit onClose={this.onClose}> </Exit>
            <Title>Warning!</Title>
          </div>
          <Content>{this.props.children}</Content>
          <div class="actions">
            <Button
              acceptTC={this.acceptTC}>
              Accept Terms & Conditions
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// This one is pretty easy to understand.
