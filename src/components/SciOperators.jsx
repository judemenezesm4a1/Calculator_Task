import React, { Component } from "react";
import "./Counter.css";

class SciOperators extends Component {
  render() {
    return (
      <div className="button_key">
        <button name="(" onClick={e => this.props.onClick(e.target.name)}>
          (
        </button>

        <button name=")" onClick={e => this.props.onClick(e.target.name)}>
          )
        </button>
        <button name="mc+" onClick={e => this.props.onClick(e.target.name)}>
          mc+
        </button>

        <button name="mc-" onClick={e => this.props.onClick(e.target.name)}>
          mc-
        </button>
        <br />

        <button name="x2" onClick={e => this.props.onClick(e.target.name)}>
          X^2
        </button>
        <button name="x3" onClick={e => this.props.onClick(e.target.name)}>
          X^3
        </button>
        <button name="xy" onClick={e => this.props.onClick(e.target.name)}>
          X^y
        </button>
        <button name="10x" onClick={e => this.props.onClick(e.target.name)}>
          10^x
        </button>
        <br />

        <button name="1/x" onClick={e => this.props.onClick(e.target.name)}>
          1/x
        </button>
        <button name="ln" onClick={e => this.props.onClick(e.target.name)}>
          ln
        </button>
        <button name="log10" onClick={e => this.props.onClick(e.target.name)}>
          log10
        </button>
        <button name="ex" onClick={e => this.props.onClick(e.target.name)}>
          e^x
        </button>
        <br />

        <button name="x!" onClick={e => this.props.onClick(e.target.name)}>
          x!
        </button>
        <button name="sin" onClick={e => this.props.onClick(e.target.name)}>
          sin
        </button>
        <button name="cos" onClick={e => this.props.onClick(e.target.name)}>
          cos
        </button>
        <button name="tan" onClick={e => this.props.onClick(e.target.name)}>
          tan
        </button>
        <br />

        <button name="Rad" onClick={e => this.props.onClick(e.target.name)}>
          Rad
        </button>

        <button name="sinh" onClick={e => this.props.onClick(e.target.name)}>
          sinh
        </button>

        <button name="." onClick={e => this.props.onClick(e.target.name)}>
          tanh
        </button>

        <button name="3.14" onClick={e => this.props.onClick(e.target.name)}>
          π
        </button>

        <br />
      </div>
    );
  }
}

export default SciOperators;
