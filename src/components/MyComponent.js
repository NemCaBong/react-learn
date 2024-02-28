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

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target.value);
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>Click me</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
