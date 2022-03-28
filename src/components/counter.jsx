import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  // 不能直接this.state.count++, 虽然数字增加了，但是react看不见
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 }); // overwrite
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
