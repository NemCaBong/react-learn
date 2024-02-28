import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Hoàng",
    age: 21,
    address: "Hà Nội",
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
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
          <label>Enter your name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <label>Enter your age:</label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Click me</button>
        </form>
      </div>
    );
  }
}
export default UserInfo;
