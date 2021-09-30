import React from "react";
import "./button.css";

export default class Button extends React.Component {
  acceptTC = e => {
    this.props.acceptTC && this.props.acceptTC(e);
  };
  
  render() {

    return (
      <button class="toggle-button"
        onClick={this.acceptTC}>
        {this.props.children}
      </button>
    );
  }
}

// I suppose you could change the name of "acceptTC" to whatever you please, you know?
// "buttonCallback" or whatever your App.js-level component calls for.
// All you have to do is pass the functionality down through the various layers.
// I don't know -- that doesn't SEEM very complicated,
// and nor does manipulating/customizing it. Whatever. YMMV.
// I'm really curious to see how the "theming" works - I've got some suspicious on how.
