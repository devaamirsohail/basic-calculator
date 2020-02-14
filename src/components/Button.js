import React from "react";
import { Button as MButton } from "@material-ui/core";

export default class Button extends React.Component {
  render() {
    return (
      <MButton
        variant="contained"
        onClick={() => this.props.onChange(this.props.children)}
        className="calc-button"
        disabled={this.props.disabled}
      >
        {this.props.disabled ? "\u00a0" : this.props.children}
      </MButton>
    );
  }
}
