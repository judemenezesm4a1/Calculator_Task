import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    return (
      <div className="button_key">
        <button
          class="clear"
          name="C"
          onClick={e => this.props.onClick(e.target.name)}
        >
          C
        </button>

        <button
          class="pm"
          name="+/-"
          onClick={e => this.props.onClick(e.target.name)}
        >
          +/-
        </button>
        <button
          class="per"
          name="%"
          onClick={e => this.props.onClick(e.target.name)}
        >
          %
        </button>

        <button
          class="divi"
          name="/"
          onClick={e => this.props.onClick(e.target.name)}
        >
          /
        </button>
        <br />

        <button name="7" onClick={e => this.props.onClick(e.target.name)}>
          7
        </button>
        <button name="8" onClick={e => this.props.onClick(e.target.name)}>
          8
        </button>
        <button name="9" onClick={e => this.props.onClick(e.target.name)}>
          9
        </button>
        <button
          class="mul"
          name="*"
          onClick={e => this.props.onClick(e.target.name)}
        >
          x
        </button>
        <br />

        <button name="4" onClick={e => this.props.onClick(e.target.name)}>
          4
        </button>
        <button name="5" onClick={e => this.props.onClick(e.target.name)}>
          5
        </button>
        <button name="6" onClick={e => this.props.onClick(e.target.name)}>
          6
        </button>
        <button
          class="sub"
          name="-"
          onClick={e => this.props.onClick(e.target.name)}
        >
          -
        </button>
        <br />

        <button name="1" onClick={e => this.props.onClick(e.target.name)}>
          1
        </button>
        <button name="2" onClick={e => this.props.onClick(e.target.name)}>
          2
        </button>
        <button name="3" onClick={e => this.props.onClick(e.target.name)}>
          3
        </button>
        <button
          class="add"
          name="+"
          onClick={e => this.props.onClick(e.target.name)}
        >
          +
        </button>
        <br />

        <button
          class="zero"
          name="0"
          onClick={e => this.props.onClick(e.target.name)}
        >
          0
        </button>

        <button name="." onClick={e => this.props.onClick(e.target.name)}>
          .
        </button>

        <button
          class="equals"
          name="="
          onClick={e => this.props.onClick(e.target.name)}
        >
          =
        </button>

        <br />
      </div>
    );
  }
}

export default Counter;
