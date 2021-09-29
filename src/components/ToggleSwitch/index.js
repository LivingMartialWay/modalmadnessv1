import React from "react";
import "./toggleswitch.css";

export default class ToggleSwitch extends React.Component {
  render() {

    return (
      <div className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            name="{this.props.Name}"
            id="{this.props.Name}"
          />
          <label className="toggle-switch-label" htmlFor="{this.props.Name}">
            <span className="toggle-switch-inner" />
            <span className="toggle-switch-switch" />
          </label>
        </div>
      );
    }
  }
