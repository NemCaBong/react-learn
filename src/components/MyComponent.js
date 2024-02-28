import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoàng", age: "21" },
      { id: 2, name: "Trang", age: "20" },
      { id: 3, name: "Huy", age: "10" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
