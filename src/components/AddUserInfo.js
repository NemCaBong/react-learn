import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "",
    age: "",
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
    // truy cập vào props truyền từ component cha
    // mà fire handleAddNewUser
    this.props.handleAddNewUser({
      // thêm "-random" để tạo ra id "ngẫu nhiên
      // không trùng với id đã có sẵn trước đó
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello, I'm {this.state.name}</h1>
        <p>I'm {this.state.age} years old</p>
        <p>I'm from {this.state.address}</p>
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
export default AddUserInfo;
