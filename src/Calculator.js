import React from "react";
import Row from "./components/Row";
import Display from "./components/Display";
import Button from "./components/Button";
import { Grid } from "@material-ui/core";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      fnumber: "",
      lnumber: "",
      operator: "",
      result: ""
    };
  }

  handleChange = buttonValue => {
    let checkResult = "";
    if ((buttonValue >= "0" && buttonValue <= "9") || buttonValue === ".") {
      if (this.state.operator.length > 0) {
        this.setState({
          lnumber: this.state.lnumber + buttonValue,
          result: this.state.lnumber + buttonValue
        });
      } else {
        this.setState({
          fnumber: this.state.fnumber + buttonValue,
          result: this.state.fnumber + buttonValue
        });
      }
    } else if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "×" ||
      buttonValue === "÷"
    ) {
      if (this.state.fnumber.length > 0) {
        switch (buttonValue) {
          case "×":
            this.setState({
              operator: "*"
            });
            break;
          case "÷":
            this.setState({
              operator: "/"
            });
            break;
          default:
            this.setState({
              operator: buttonValue
            });
            break;
        }
      }
    } else if (buttonValue === "←") {
      if (this.state.result.length > 0) {
        checkResult = this.state.result.slice(0, -1);

        if (this.state.lnumber.length > 0) {
          this.setState({
            lnumber: checkResult,
            result: checkResult
          });
        } else {
          this.setState({
            fnumber: checkResult,
            result: checkResult
          });
        }
      }
    } else if (buttonValue === "Clear") {
      this.Reset();
    } else if (buttonValue === "=") {
      this.Calculate();
    } else if (buttonValue === "+/-") {
      this.Negation();
    }
  };

  Calculate = () => {
    let calculateEquation = "";
    if (this.state.fnumber.length > 0 && this.state.lnumber.length > 0) {
      switch (this.state.operator) {
        case "+":
          calculateEquation =
            parseFloat(this.state.fnumber) + parseFloat(this.state.lnumber);
          calculateEquation = calculateEquation.toString();
          this.setState({
            result: calculateEquation,
            fnumber: calculateEquation,
            lnumber: "",
            operator: ""
          });
          break;
        case "-":
          calculateEquation =
            parseFloat(this.state.fnumber) - parseFloat(this.state.lnumber);
          calculateEquation = calculateEquation.toString();
          this.setState({
            result: calculateEquation,
            fnumber: calculateEquation,
            lnumber: "",
            operator: ""
          });
          break;
        case "/":
          calculateEquation =
            parseFloat(this.state.fnumber) / parseFloat(this.state.lnumber);
          calculateEquation = calculateEquation.toString();
          if (calculateEquation.includes("Infinity")) {
            this.setState({
              result: calculateEquation,
              fnumber: "",
              lnumber: "",
              operator: ""
            });
          } else {
            this.setState({
              result: calculateEquation,
              fnumber: calculateEquation,
              lnumber: "",
              operator: ""
            });
          }

          break;
        case "*":
          calculateEquation =
            parseFloat(this.state.fnumber) * parseFloat(this.state.lnumber);
          calculateEquation = calculateEquation.toString();
          this.setState({
            result: calculateEquation,
            fnumber: calculateEquation,
            lnumber: "",
            operator: ""
          });
          break;
        default:
          this.setState({
            result: this.state.result
          });
      }
    } else {
      this.setState({
        result: this.state.result
      });
    }
  };
  Reset = () => {
    this.setState({
      fnumber: "",
      lnumber: "",
      operator: "",
      result: " "
    });
  };
  Negation = () => {
    let Negate = "";
    if (this.state.result.length > 0) {
      Negate = parseFloat(this.state.result);
      Negate = Negate > 0 ? -Math.abs(Negate) : Math.abs(Negate);
      Negate = Negate.toString();
      if (this.state.lnumber.length > 0) {
        this.setState({
          lnumber: Negate,
          result: Negate
        });
      } else if (this.state.fnumber.length > 0) {
        this.setState({
          fnumber: Negate,
          result: Negate
        });
      }
    }
  };

  render() {
    const btnValue = [
      ["Clear", "←", "", "+"],
      ["7", "8", "9", "-"],
      ["4", "5", "6", "×"],
      ["1", "2", "3", "÷"],
      ["0", "+/-", ".", "="]
    ];

    return (
      <Grid container justify="center">
        <div>
          <Grid item lg={12} md={12} xs={12}>
            <Row>
              <Display result={this.state.result} />
            </Row>
          </Grid>
          {btnValue.map((key, index) => (
            <Row key={index}>
              <Grid container spacing={1}>
                {key.map(val => (
                  <Grid key={val} item lg={3} md={3} xs={3}>
                    <Button disabled={!val} onChange={this.handleChange}>
                      {val}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Row>
          ))}
        </div>
      </Grid>
    );
  }
}
