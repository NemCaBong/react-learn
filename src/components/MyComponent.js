import React from "react";

class MyComponent extends React.Component {
  // biến state
  state = {
    name: "Hoàng",
    age: 21,
    address: "Hà Nội",
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
      </div>
    );
  }
}

export default MyComponent;
