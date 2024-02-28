import React from "react";

class MyComponent extends React.Component {
  // biến state
  state = {
    name: "Hoàng",
    age: 21,
    address: "Hà Nội",
  };
  handleClick = (event) => {
    this.setState({
      name: "Hoàng đẹp trai",
      age: Math.floor(Math.random() * 100) + 1,
    });
  };

  handleOnMoveOver = (event) => {
    console.log(event.pageX);
  };
  render() {
    return (
      <div>
        <h1>Hello, I'm {this.state.name}</h1>
        <p>I'm {this.state.age} years old</p>
        <p>I'm from {this.state.address}</p>
        <p>
          This is the {Math.round(Math.random() * 10)} times i have written JSX
        </p>
        <button onMouseOver={this.handleOnMoveOver} onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
