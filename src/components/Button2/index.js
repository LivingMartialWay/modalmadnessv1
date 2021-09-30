import React from "react";
import "./button2.css";

export default class Button2 extends React.Component {
  toggleModal = e => {
    this.props.toggleModal && this.props.toggleModal(e);
  };

  render() {

    return (
      <button class="toggle-button"
        onClick={this.toggleModal}>
        {this.props.children}
      </button>
    );
  }
}
