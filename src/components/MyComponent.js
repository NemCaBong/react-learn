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

  handleDeleteUser = (userId) => {
    let listUsersClone = [...this.state.listUsers];
    listUsersClone = listUsersClone.filter((user) => user.id !== userId);

    this.setState({
      listUsers: listUsersClone,
    });
  };

  render() {
    return (
      <>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <DisplayInfo
          handleDeleteUser={this.handleDeleteUser}
          listUsers={this.state.listUsers}
        />
      </>
    );
  }
}

export default MyComponent;
