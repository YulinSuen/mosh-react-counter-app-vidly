import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  //One way to bind Counter Object to Handler
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // 在对象的方法种，this指代对象, 在普通方法中，this指代windows, in strict mode, this is undefined
  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* 没有传入方法，而是传入引用 */}
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
