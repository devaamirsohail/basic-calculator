import React from "react";
import { TextField } from "@material-ui/core";
export default class Display extends React.Component {
  render() {
    return (
      <TextField
        variant="filled"
        className="calc-display"
        type="text"
        disabled={true}
        value={this.props.result}
      />
    );
  }
}
