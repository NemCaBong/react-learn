import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoàng", age: "21" },
      { id: 2, name: "Trang", age: "20" },
      { id: 3, name: "Huy", age: "10" },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
