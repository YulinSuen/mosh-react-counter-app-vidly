import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value, // props包含了所有在Counters中为counter设置的属性
  };
  // 不能直接this.state.value++, 虽然数字增加了，但是react看不见
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 }); // overwrite
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
