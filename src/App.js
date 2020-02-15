import React, { Component } from "react";
import "./App.css";
import Output from "./components/Output";
import Counter from "./components/Counter";
import SciOperators from "./components/SciOperators";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.compute();
    } else if (button === "C") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  compute = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <div className="calculator-display ml-auto mr-auto">
        <div className="row">
          <div id="display" className="col-lg-12 p-0">
            <Output result={this.state.result} />
          </div>
        </div>
        <div className="row">
          <div id="sci" className="col-6 p-0 ">
            <SciOperators onClick={this.onClick} />
          </div>
          <div className="col-6 p-0">
            <Counter onClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
