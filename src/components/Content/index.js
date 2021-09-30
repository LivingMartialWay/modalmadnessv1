import React from "react";
import "./content.css";

export default class Content extends React.Component {

  render() {

    return (
      <div>{this.props.children}</div>
    );
  }
}
