import React from "react";
import "./title.css";

export default class Title extends React.Component {

  render() {

    return (
      <h2 class="title">
        {this.props.children}
      </h2>
    );
  }
}
