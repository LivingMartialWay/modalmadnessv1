import React from "react";
import "./modal.css";
import Title from "../Title"
import Exit from "../Exit";
import Content from "../Content"
import Button from "../Button";
import Shader from "../Shader";
import Texit from "../Texit";
import ToggleSwitch from "../ToggleSwitch";

export default class Modal extends React.Component {
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
            <Texit onClose={this.onClose}> </Texit>
            <Title>Warning!</Title>
          </div>
          <Content>Please understand: <br/><br/> It looks this way because I've already left to rebuild it in Hooks.</Content>
          <div class="actions">
            <Button
              acceptTC={this.acceptTC}>
              Accept
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// This one is pretty easy to understand.
